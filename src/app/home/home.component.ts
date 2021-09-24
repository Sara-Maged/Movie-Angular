import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../service/movie-api/movie-api.service'
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Top_Movies {
  constructor() { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieList: any[] | undefined;
  //detailsList: any;
  
  constructor(private httpClient: HttpClient) { 
    //private movie:MovieApiService
    // this.movie.getList().subscribe(moviesList => {
    //   console.warn(moviesList)
    //   this.moviesList = moviesList
    // })
  }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.httpClient.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=401acaaed66217e58bfececf4369ef49').subscribe(
      response => {
        console.log(response);
        this.movieList = response['results'];
      }
    );
  }

}
  // getDetails(id: number){
  //   this.httpClient.get<any>(
  //   'https://api.themoviedb.org/3/movie/' + id +' ?api_key=401acaaed66217e58bfececf4369ef49').subscribe(
  //     response => {
  //       console.log(response);
  //       this.detailsList = response['results'];
  //     }
  //   );
  // }

