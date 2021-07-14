import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../_services";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  templateUrl: "login.component.html",
  styleUrls: ["login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = "";
  error = "";

  // Xstreme vars2
  showLoginform = true;
  showRecoverform = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["profile"]);
    }

    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  ngOnInit() {
    // get return url from route parameters or default to '/experts/feed'
    this.returnUrl =
      this.route.snapshot.queryParams["returnUrl"] || "/experts/feed";
  }

  showRecoverForm() {
    this.showLoginform = !this.showLoginform;
    this.showRecoverform = !this.showRecoverform;
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f.email.value, this.f.password.value)
      // .pipe(first())
      .subscribe(
        (user) => {
          console.log("user: ", user);
          console.log("returnUrl: ", this.returnUrl);
          if (user) {
            this.router.navigate([this.returnUrl]);
          }
          localStorage.setItem("profilePic", user.user.profilePhotoUrl);
          localStorage.setItem("firstName", user.user.firstName);
          localStorage.setItem("lastName", user.user.lastName);
          // @ts-ignore
          localStorage.setItem("email", user.user.email);
        },
        (error) => {
          this.error = error.error.detail;
          this.loading = false;
        }
      );
  }
}
