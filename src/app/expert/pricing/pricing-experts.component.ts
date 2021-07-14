import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing-experts.component.html",
  styleUrls: ["./pricing-experts.component.scss"],
})
export class PricingExpertComponent implements OnInit {
  disabled = false;
  constructor() {
    const html = document.querySelector("#html") as HTMLVideoElement;
    html.style.scrollBehavior = "auto";
  }

  ngOnInit(): void {}

  setExpert() {
    localStorage.setItem("expert", "true");
  }
}
