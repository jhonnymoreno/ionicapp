import { Component, ViewChild } from "@angular/core";
import { Slides } from "ionic-angular";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("slider") slides: Slides;
  event = "";
  constructor() {}

  ngOnInit() {}

  segmentChange() {
    console.log("event", event);

    if (this.event === "login") {
      this.slides.slideTo(0, 500);
    } else this.slides.slideTo(1, 500);
  }
}
