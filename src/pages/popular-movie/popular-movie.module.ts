import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopularMoviePage } from './popular-movie';

@NgModule({
  declarations: [
    PopularMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(PopularMoviePage),
  ],
})
export class PopularMoviePageModule {}
