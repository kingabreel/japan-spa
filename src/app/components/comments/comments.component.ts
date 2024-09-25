import { Component } from '@angular/core';
import { City } from '../../model/city';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommentsService } from '../../service/comments.service';
import { CityService } from '../../service/city.service';
import { Comment, CreateComment } from '../../model/comment';
import { jwtDecode } from 'jwt-decode';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule,
    MatSelectModule, MatInputModule, MatCardModule, MatButtonModule, MatPaginatorModule
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  comments: Comment[] = [];
  cities: City[] = [];  
  selectedCity: string = ''; 
  commentForm: FormGroup; 
  isLoggedIn: boolean = false; 
  totalCommentPage: number = 0;

  pageSize: number = 3;
  pageSizeOptions: number[] = [3, 5];


  constructor(private commentService: CommentsService, private cityService: CityService) {
    this.commentForm = new FormGroup({
      comment: new FormControl('', [Validators.required]),
      cityId: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.checkAuthentication();
    this.getComments();
    this.getCities();
  }

  checkAuthentication() {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token;
  }

  getComments(pageNumber: number = 0, pageSizeS: number = 1000) {
    this.commentService.getComment(this.selectedCity, pageNumber, pageSizeS).subscribe(comments => {
      let init = this.comments.length == 0 ? true : false;

      this.comments = comments.content
        .map(comment => ({
          ...comment,
          createdAt: new Date(comment.createdAt) 
        }))
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());


        if (init) {
          this.comments = this.comments.slice(0, this.pageSize);
        }
        this.totalCommentPage = comments.content.length * comments.totalPages; 
    });
  }

  getCities() {
    this.cityService.getCity(0, 1000).subscribe(data => {
      this.cities = data.content.sort((a, b) => a.name.localeCompare(b.name));
    });
  }

  submitComment() {
    if (this.commentForm.valid && this.isLoggedIn) {
      const tk = localStorage.getItem('token');

      if(tk) {
        const decodedTk: any = jwtDecode(tk);
        
        let comment = {
          userMail: decodedTk.email,
          cityId: this.commentForm.get('cityId')?.value,
          commentText: this.commentForm.get('comment')?.value
        }
        
        this.commentService.addComment(tk, comment).subscribe(data =>{
          this.getComments(0, this.pageSize);
        })
      }

    }
  }

  onCitySelected(event: Event) {
    const city = event.toString();
    this.selectedCity = city;
    this.getComments(0, this.pageSize);
  }

  onPageChange(event: any) {
    this.getComments(event.pageIndex, event.pageSize);
  }
}
