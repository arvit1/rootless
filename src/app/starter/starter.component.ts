import { Component, AfterViewInit } from "@angular/core";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
// import "../../assets/custom.js";
@Component({
  templateUrl: "./starter.component.html",
  styleUrls: ["./starter.component.scss"],
  providers: [NgbCarouselConfig],
})
export class StarterComponent implements AfterViewInit {
  subtitle: string;

  constructor(config: NgbCarouselConfig) {
    this.subtitle = "This is some text within a card block.";
    var html = <HTMLVideoElement>document.querySelector("#html");
    html.style.scrollBehavior = "smooth";
  }
  onscroll = (el: any, listener: any) => {
    el.addEventListener("scroll", listener);
  };

  ngAfterViewInit() {
    localStorage.removeItem("expert");
    localStorage.removeItem("lastStepExpert");
    const backtotop = document.getElementById("mydiv");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      this.onscroll(document, toggleBacktotop);
    }

    var s = document.createElement("script");
    s.setAttribute("src", "assets/custom.js");
    s.setAttribute("id", "customJs");
    document.body.appendChild(s);
    s.remove();
  }
}
