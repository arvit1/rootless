import { Component, Input, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/_services";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: "app-interests",
  templateUrl: "./interests.component.html",
  styleUrls: ["./interests.component.scss"],
})
export class InterestsComponent implements OnInit {
  states = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Federated States Of Micronesia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Marshall Islands",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  placeholderTypeahead = "Start typing to search for interests";
  selectedInterests = ["Music", "Finance", "Magazine"];
  suggestedInterests = ["Construction", "Food"];
  expert = localStorage.getItem("expert");
  thirdStep = false;
  @Input() userData: any;

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void { }

  onSelect(value: string) {
    this.selectedInterests.push(value);
  }

  addInterest(value: string) {
    const index = this.suggestedInterests.indexOf(value, 0);
    if (index > -1) {
      this.suggestedInterests.splice(index, 1);
      this.selectedInterests.push(value);
    }
  }

  submit() {
    if (this.userData.userType !== "EXPERT") {
      this.userData.interests = this.selectedInterests;
    }
    this.auth
      .register(this.userData)
      .pipe(first())
      .subscribe(
        (user) => {
          if (user && this.expert === "true") {
            this.thirdStep = true;
            this.router.navigate(["/login"]);
          } else if (user) {
            this.router.navigate(["/login"]);
          }
          console.log(user);
        },
        (error) => {
          // this.toastService.show('I am a standard toast');
        }
      );
  }
}
