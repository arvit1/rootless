import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { find, pull } from "lodash";
import {
  AuthenticationService,
  UploadService,
  UserService,
} from "src/app/_services";
import { Blog, Course, User } from "../_models";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";
import { HttpErrorResponse } from "@angular/common/http";

class City {
  item_id = -1;
  item_text = "";
}
@Component({
  templateUrl: "profile.component.html",
  styleUrls: ["profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  active = 1;
  editingProfile = false;
  aboutData: User = {
    firstName: "",
    lastName: "",
    userType: "",
    profilePhotoUrl: "",
    expertise: [],
  };
  editingData: User = {
    firstName: "",
    lastName: "",
    profilePhotoUrl: "",
    quote: "",
    about: "",
    tagline: "",
    expertise: [],
  };
  form: FormGroup | undefined;

  discussionsType: string[] = [];
  selectedDiscussions: City[] = [];
  dropdownSettings = {
    singleSelection: false,
    idField: "item_id",
    textField: "item_text",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    itemsShowLimit: 3,
    allowSearchFilter: true,
  };
  singledropdownSettings = {};
  closeDropdownSelection = false;

  userId = 0;
  userRole = "";
  loggedInId!: any;
  myProfile = false;
  hired = false;

  expertBlogs: Blog[] = [];
  expertCourses: Course[] = [];

  constructor(
    private fb: FormBuilder,
    private uploadService: UploadService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private authService: AuthenticationService,
    private toastr: ToastrService
  ) {
    // force route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.userId = this.route.snapshot.params.id;
    this.loggedInId = this.authService.currentUserValue
      ? this.authService.currentUserValue.user.id
      : 0;

    if (this.userId === this.loggedInId) {
      this.myProfile = true;
    }

    this.form = this.fb.group({
      expertise: [undefined],
    });

    if (!this.myProfile) {
      this.userRole = "EXPERT";
      this.userService.getExpertById(this.userId).subscribe(
        (res) => {
          this.aboutData = res;
          this.getBlogs();
          this.getCourses();
          if (this.loggedInId) {
            this.getIfHired();
          }
        },
        (error) => {
          // TODO hande error when expert not found
          console.log(error);
        }
      );
    } else {
      //@ts-ignore
      this.userRole = this.authService.currentUserValue
        ? this.authService.getRole()
        : "";
      this.userService.getMyProfile().subscribe((res) => {
        this.aboutData = res;
        this.editingData = {
          firstName: res.firstName,
          lastName: res.lastName,
          profilePhotoUrl: res.profilePhotoUrl,
          quote: res.quote,
          about: res.about,
          tagline: res.tagline,
          expertise: res.expertise ? res.expertise : [],
        };
        if (res.userType === "EXPERT") {
          this.getBlogs();
          this.getCourses();
        }
      });
    }
    console.log(this.userRole);
  }

  ngOnInit() {
    this.discussionsType = [
      "Mumbai",
      "New Delhi",
      "Bangaluru",
      "Pune",
      "Navsari",
    ];
  }

  getBlogs() {
    this.userService.getBlogs(this.userId).subscribe((res) => {
      this.expertBlogs = res.items;
    });
  }

  getCourses() {
    this.userService.getCourses(this.userId).subscribe((res) => {
      this.expertCourses = res.items;
    });
  }

  getTime(time: string) {
    return moment(time).fromNow();
  }

  getIfHired() {
    this.userService.getHires(this.userId).subscribe((res) => {
      if (res == null) {
        this.hired = true;
      }
    });
  }

  setEditingProfile(state: boolean) {
    this.editingProfile = state;
    if (state === true) {
      this.active = 1;
    } else {
      this.editingData = {
        firstName: this.aboutData.firstName,
        lastName: this.aboutData.lastName,
        profilePhotoUrl: this.aboutData.profilePhotoUrl,
        quote: this.aboutData.quote,
        about: this.aboutData.about,
        tagline: this.aboutData.tagline,
        expertise: this.aboutData.expertise,
      };
    }
  }

  saveProfile() {
    this.userService.updateProfile(this.editingData).subscribe(
      (res) => {
        this.toastr.success("Profile edited successfully");
        this.editingProfile = false;

        this.aboutData.firstName = res.firstName;
        this.aboutData.lastName = res.lastName;
        this.aboutData.profilePhotoUrl = res.profilePhotoUrl;
        this.aboutData.quote = res.quote;
        this.aboutData.about = res.about;
        this.aboutData.tagline = res.tagline;
        this.aboutData.expertise = res.expertise;
      },
      (error: HttpErrorResponse) => {
        this.toastr.error("An error has happened");
      }
    );
  }

  setActiveTab(tabNr: number) {
    this.active = tabNr;
  }

  // tags
  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.form?.controls.expertise.value;
    if (event.code === "Comma") {
      this.addTag(inputValue);
      this.form?.controls.expertise.setValue("");
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    const inputValue: string = this.form?.controls.expertise.value;
    if (event.code === "Backspace" && !inputValue) {
      this.removeTag();
      return;
    }
  }

  addTag(tag: string): void {
    if (tag[tag.length - 1] === ",") {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !find(this.editingData.expertise, tag)) {
      this.editingData.expertise.push(tag);
    }
  }

  removeTag(tag?: string): void {
    if (!!tag) {
      pull(this.editingData.expertise, tag);
    } else {
      this.editingData.expertise.splice(-1);
    }
  }

  // community filter
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  uploadFile(event: any) {
    if (event.target.files.length === 0) {
      return;
    }
    const file: File = event.target.files[0];

    this.uploadService.getSignedUrl(file, "image").subscribe((res) => {
      this.uploadService.uploadToS3(res, file).subscribe((response) => {
        this.editingData.profilePhotoUrl = res.filename;
        this.saveProfile();
      });
    });
  }
}
