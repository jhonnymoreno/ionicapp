import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';
import { MovieDetailPage } from '../movie-detail/movie-detail';

/**
 * Generated class for the PopularMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popular-movie',
  templateUrl: 'popular-movie.html',
  providers:[
    MovieProvider
  ]
})
export class PopularMoviePage {

  public movie_list = Array<any>();
  public loader;
  public refresher;
  public isRefreshing: boolean = false;
  public page = 1;
  public infiniteScroll;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.loadMovies();
  }

  presentLoading(){
    this.loader = this.loadingCtrl.create({
      content: "Loading movies...",
    });
    this.loader.present();
  }

  doRefresh(refresher){
    this.refresher = refresher;
    this.isRefreshing = true;
    this.loadMovies();
  }

  hideLoading(){
    this.loader.dismiss();
  }

  loadMovies(newpage: boolean = false) {
    this.presentLoading();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data => {
        const response = (data as any);
        const json_obj = JSON.parse(response._body);

        if(newpage){
          this.movie_list = this.movie_list.concat(json_obj.results);
          console.log(this.movie_list);
          this.infiniteScroll.complete();
        }else{
          this.movie_list = json_obj.results;
        }
        
        console.log(json_obj);
        this.hideLoading();
        if (this.isRefreshing) {
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log(error);
        this.hideLoading();
        this.refresher.complete();
        this.isRefreshing = false;
      }
    );
  }

  openDetail(movie) {
    this.navCtrl.push(MovieDetailPage, { id: movie.id });
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.loadMovies(true);
  }

}
