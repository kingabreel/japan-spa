import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCity, City } from '../model/city';
import { Page } from '../model/page';
import { AddTouristicAttraction, TouristicAttraction } from '../model/touristicAttraction';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private url = 'https://japan-spa.onrender.com/api/v1/city'

  constructor(private http: HttpClient) { }

  getCity(pageNumber: number = 0, pageSize: number = 10): Observable<Page<City>>{
    return this.http.get<Page<City>>(`${this.url}?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

  addCity(city: AddCity, token:string):Observable<City>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` 
    });
    return this.http.post<City>(this.url, city, {headers});
  }

  addTouristicAttraction(touristAttraction: AddTouristicAttraction, token:string):Observable<TouristicAttraction> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}` 
    });
    return this.http.post<TouristicAttraction>(`${this.url}/touristic-attractions`,touristAttraction, {headers});
  }
}
