import { Component, OnInit } from "@angular/core";

@Component({
  templateUrl: "contact.component.html",
  styleUrls: ["contact.component.scss"],
})
export class ContactComponent implements OnInit {
  ngOnInit() {
    var html = <HTMLVideoElement>document.querySelector("#html");
    html.style.scrollBehavior = "auto";
  }
}
