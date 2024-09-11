import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private url = 'http://localhost:8080/api/v1/city'

  constructor(private http: HttpClient) { }

  getCity(pageNumber: number = 0, pageSize: number = 10): Observable<Page<City>>{
    return this.http.get<Page<City>>(`${this.url}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }
}
