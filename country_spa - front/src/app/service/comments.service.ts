import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment, CreateComment, CreateCommentResponse } from '../model/comment';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'https://japan-spa.onrender.com/api/v1/comment'

  constructor(private http: HttpClient) { }

  getComment(city: String = '', pageNumber: number = 0, pageSize: number = 10): Observable<Page<Comment>>{
    let url = `${this.url}`;

    if (city) return this.http.get<Page<Comment>>(`${url}?city=${city}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
        
    return this.http.get<Page<Comment>>(`${url}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  addComment(token: string, comment: CreateComment): Observable<CreateCommentResponse>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` 
    });
    return this.http.post<CreateCommentResponse>(this.url, comment, {headers});
  }
}
