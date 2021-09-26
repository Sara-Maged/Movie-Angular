import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http : HttpClient) { }

  getById(id: any):Observable<any>{
    const url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=401acaaed66217e58bfececf4369ef49';
    return this.http.get(url)
  }
