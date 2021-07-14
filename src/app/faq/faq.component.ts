import { Component, OnInit } from "@angular/core";
import { NgbPanelChangeEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.component.html",
  styleUrls: ["./faq.component.scss"],
})
export class FaqComponent implements OnInit {
  constructor() {
    var html = <HTMLVideoElement>document.querySelector("#html");
    html.style.scrollBehavior = "auto";
  }

  ngOnInit(): void {}

  disabled = false;
  search = "";

  beforeChange($event: NgbPanelChangeEvent) {
    if ($event.panelId === "preventchange-2") {
      $event.preventDefault();
    }

    if ($event.panelId === "preventchange-3" && $event.nextState === false) {
      $event.preventDefault();
    }
  }

  searchFunction(e: any) {
    console.log(e);
    if (e.keyCode === 13) {
      this.getSearch(this.search);
    }
  }

  getSearch(title: string) {
    console.log(title);
  }
}
