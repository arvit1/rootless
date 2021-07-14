import {
  AfterContentChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import {
  AuthenticationService,
  ScriptService,
  UploadService,
} from "src/app/_services";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LevelEnum, RoleEnum } from "src/app/_models";

@Component({
  selector: "app-signup",
  templateUrl: "singup.component.html",
  styleUrls: ["singup.component.scss"],
})
export class SingupComponent
  implements OnInit, AfterContentChecked, AfterViewInit {
  active = 1;
  checkout = false;
  interest = false;
  signup = true;
  memberType = "";
  header = "";
  subTitle = "";
  interests = false;
  myForm: FormGroup;
  expertForm: FormGroup;
  userData = {};
  expert = localStorage.getItem("expert");
  secondStepExpert = "false";
  expertPhotoUrl = "";
  thirdStep = localStorage.getItem("lastStepExpert");

  constructor(
    private cdr: ChangeDetectorRef,
    private auth: AuthenticationService,
    private fb: FormBuilder,
    private scriptService: ScriptService,
    private uploadService: UploadService
  ) {
    this.myForm = fb.group({
      password: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      acceptTerms: [, [Validators.required]],
    });

    this.expertForm = fb.group({
      // headshot: [""],
      profession: ["", [Validators.required]],
      about: ["", [Validators.required]],
      tagline: ["", [Validators.required]],
      bringsToTable: [[], [Validators.required]],
      expertise: [[], [Validators.required]],
    });
  }

  ngAfterViewInit(): void {
    this.scriptService.loadScript("custom").then(() => {
      //TODO yllza
    });
  }

  nextStep() {
    if (!this.myForm.invalid) {
      if (this.expert === "true") {
        this.secondStepExpert = "true";
        // this.checkout = true;
        this.signup = false;
        this.userData = {
          firstName: this.myForm.value.firstName,
          lastName: this.myForm.value.lastName,
          email: this.myForm.value.email,
          password: this.myForm.value.password,
          userType: RoleEnum.EXPERT,
          userLevel: LevelEnum.TIER_1,
        };
      } else {
        this.userData = {
          firstName: this.myForm.value.firstName,
          lastName: this.myForm.value.lastName,
          email: this.myForm.value.email,
          password: this.myForm.value.password,
          userType: RoleEnum.MEMBER,
          userLevel: this.active === 1 ? LevelEnum.TIER_1 : LevelEnum.TIER_2,
        };
        this.checkout = true;
        this.signup = false;
      }
    }
  }

  nextStepExpert() {
    if (!this.expertForm.invalid) {
      console.log('form: ', this.expertForm)
      this.userData = {
        ...this.userData,
        profession: this.expertForm.value.profession,
        about: this.expertForm.value.about,
        tagline: this.expertForm.value.tagline,
        bringsToTable: this.expertForm.value.bringsToTable,
        expertise: this.expertForm.value.expertise,
      }
      this.secondStepExpert = "false";
      this.checkout = true;
      this.signup = false;
    }
  }


  ngOnInit() {
    this.updateMessage();
  }

  ngAfterContentChecked() {
    this.cdr.detectChanges();
    this.updateMessage();
    this.thirdStep = localStorage.getItem("lastStepExpert");
  }

  updateMessage() {
    if (this.active === 1) {
      this.memberType = "curious";
    } else if (this.active === 2) {
      this.memberType = "rootless";
    }
    if (this.expert === "true") {
      this.header = "Join us";
      this.subTitle = "as an expert member";
      this.memberType = "expert";
    } else if (this.checkout === false) {
      this.header = "Join us";
      this.subTitle = "as a " + this.memberType + " member";
    } else if (this.interests === true) {
      this.header = "Welcome aboard";
      this.subTitle = "Tell us where you want to grow";
    } else {
      this.header = "Checkout";
      this.subTitle = "start your free 7 days";
    }
  }

  addItem(newItem: boolean) {
    this.interests = newItem;
  }

  uploadFile(event: any) {
    if (event.target.files.length == 0) {
      return;
    }
    let file: File = event.target.files[0];

    this.uploadService.getSignedUrl(file, "image").subscribe((res) => {
      this.uploadService.uploadToS3(res, file).subscribe((response) => {
        this.expertPhotoUrl = res.filename;
      });
    });
  }
}
