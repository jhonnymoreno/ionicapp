import { Component, ViewChild, OnInit } from "@angular/core";
import { escapeIdentifier } from "@angular/compiler/src/output/abstract_emitter";
import { Slides } from "ionic-angular";
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor() {}

  ngOnInit() {}

  segmentChange(event: any) {
    if (event.detail.value === "login") {
      this.slides.getPreviousIndex();
    } else this.slides.getActiveIndex();
  }
}
