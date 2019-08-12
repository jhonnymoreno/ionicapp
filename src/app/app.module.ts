import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { MovieProvider } from '../providers/movie/movie';
import { PopularMoviePageModule } from "../pages/popular-movie/popular-movie.module";
import { MovieDetailPageModule } from "../pages/movie-detail/movie-detail.module";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [MyApp, HomePage, LoginComponent, TabsPage, RegistroComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(MyApp), 
    ReactiveFormsModule,
    PopularMoviePageModule,
    MovieDetailPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, TabsPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieProvider
  ]
})
export class AppModule {}
