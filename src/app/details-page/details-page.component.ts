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

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieApiService
    ) { }

  ngOnInit(): void {
    //this.getDetails(550);
    this.loadMovie();
  }

  loadMovie(){
    const movieId = this.route.snapshot.paramMap.get('id');
    this.movieService.getById(movieId).subscribe(
      data => this.movie = data
    )
  }

}

