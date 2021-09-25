import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  // private apiKey = '?api_key=1bded0cf5ec81699b719a0ab217e461e';
  // private apiUrl = 'https://api.themoviedb.org/';
  // imageBaseurl = 'https://image.tmdb.org/t/p/';

  constructor(private http : HttpClient) { }

  getById(id: any):Observable<any>{
    //console.log(id);
    const url = 'https://api.themoviedb.org/3/movie/'+id+'?api_key=401acaaed66217e58bfececf4369ef49';
    //console.log(url);
    //console.log('AAAAAAAAAAAAAA');
    //console.log(this.http.get(url));
    return this.http.get(url)
  }

  //   getList(){
  //   this.httpClient.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=401acaaed66217e58bfececf4369ef49').subscribe(
  //     response => {
  //       console.log(response);
  //       this.movieList = response['results'];
  //     }
  //   );
  // }
  // getList(){
  //   let url = "https://api.themoviedb.org/3/movie/top_rated?api_key=401acaaed66217e58bfececf4369ef49";
  //   return this.http.get(url);
  // }

  // getList(category: any){
  //   this.http.get(this.apiUrl + '3/movie/' + category + this.apiKey);
  // }

  // getImageBaseUrl() {
  //   return this.imageBaseurl;
  //  }

}
