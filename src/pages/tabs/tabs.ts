import { Component } from "@angular/core";
import { HomePage } from "../home/home";
import { PopularMoviePage } from "../popular-movie/popular-movie";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = PopularMoviePage;
  constructor() {}
}
