import { Http} from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private base_api_url: string = "https://api.themoviedb.org/3";
  private api_key: string = "5f7956db202a7fb5ca2be1ef205b7ec8";//api_key_movieDB
  constructor(public http: Http) {
  }

  getLatestMovies(page = 1) {
    return this.http.get(this.base_api_url + `/movie/popular?page=${page}&api_key=` + this.api_key);
  }

  getMovieDetail(movieId){
    return this.http.get(this.base_api_url + `/movie/${movieId}` + this.api_key);
  }

}
