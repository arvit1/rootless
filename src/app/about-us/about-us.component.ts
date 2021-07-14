import { Component } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-about-us",
  templateUrl: "about-us.component.html",
  styleUrls: ["about-us.component.scss"],
  providers: [NgbCarouselConfig],
})
export class AboutUsComponent {
  constructor(config: NgbCarouselConfig) {
    var html = <HTMLVideoElement>document.querySelector("#html");
    html.style.scrollBehavior = "auto";
  }
}
