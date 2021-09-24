import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieApiService } from '../service/movie-api/movie-api.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  //detailsList: any[] | undefined;
  movie: any;

  //private httpClient: HttpClient
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieApiService
    ) { }

  ngOnInit(): void {
    //this.getDetails(550);
    this.loadMovie();
  }

  loadMovie(){
    //console.log("LOAAAAAAAAD");
    const movieId = this.route.snapshot.paramMap.get('id');
    //console.log(movieId);
    this.movieService.getById(movieId).subscribe(
      data => this.movie = data
    )
  }

}

  // getById(id: any):Observable<any>{
  //   const url = 'https://api.themoviedb.org/3/movie/' + id +' ?api_key=401acaaed66217e58bfececf4369ef49';
  //   return this.httpClient.get(url);
  // }

  // getDetails(id: number){
  //   this.httpClient.get<any>(
  //   'https://api.themoviedb.org/3/movie/' + id +' ?api_key=401acaaed66217e58bfececf4369ef49').subscribe(
  //     response => {
  //       console.log(response);
  //       this.detailsList = response['results'];
  //     }
  //   );
  // }

  // getList(){
  //   this.httpClient.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=401acaaed66217e58bfececf4369ef49').subscribe(
  //     response => {
  //       console.log(response);
  //       this.movieList = response['results'];
  //     }
  //   );
  // }


