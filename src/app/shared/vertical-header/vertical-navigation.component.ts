import {
  Component,
  AfterContentChecked,
  EventEmitter,
  Output,
  ChangeDetectorRef,
} from "@angular/core";
import { Router } from "@angular/router";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { AuthenticationService } from "src/app/_services";

declare var $: any;

@Component({
  selector: "app-vertical-navigation",
  templateUrl: "./vertical-navigation.component.html",
})
export class VerticalNavigationComponent implements AfterContentChecked {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;
  public openVar = "";
  currentRoute = "";
  profilePic =
    localStorage.getItem("profilePic") &&
    localStorage.getItem("profilePic") !== "null"
      ? localStorage.getItem("profilePic")
      : "";
  user = localStorage.getItem("USER") ? localStorage.getItem("USER") : "";

  userRole = "";
  firstName = localStorage.getItem("firstName");
  lastName = localStorage.getItem("lastName");

  constructor(
    private authService: AuthenticationService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    // translate.setDefaultLang("en");
    // console.log(this.user);
    // @ts-ignore
    this.userRole = this.authService.currentUserValue
      ? this.authService.getRole()
      : "";
    console.log(this.userRole);
  }

  // This is for Notifications
  notifications: Object[] = [
    {
      btn: "btn-danger",
      icon: "ti-link",
      title: "Luanch Admin",
      subject: "Just see the my new admin!",
      time: "9:30 AM",
    },
    {
      btn: "btn-success",
      icon: "ti-calendar",
      title: "Event today",
      subject: "Just a reminder that you have event",
      time: "9:10 AM",
    },
    {
      btn: "btn-info",
      icon: "ti-settings",
      title: "Settings",
      subject: "You can customize this template as you want",
      time: "9:08 AM",
    },
    {
      btn: "btn-primary",
      icon: "ti-user",
      title: "Pavan kumar",
      subject: "Just see the my admin!",
      time: "9:00 AM",
    },
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: "assets/images/users/1.jpg",
      status: "online",
      from: "Pavan kumar",
      subject: "Just see the my admin!",
      time: "9:30 AM",
    },
    {
      useravatar: "assets/images/users/2.jpg",
      status: "busy",
      from: "Sonu Nigam",
      subject: "I have sung a song! See you at",
      time: "9:10 AM",
    },
    {
      useravatar: "assets/images/users/2.jpg",
      status: "away",
      from: "Arijit Sinh",
      subject: "I am a singer!",
      time: "9:08 AM",
    },
    {
      useravatar: "assets/images/users/4.jpg",
      status: "offline",
      from: "Pavan kumar",
      subject: "Just see the my admin!",
      time: "9:00 AM",
    },
  ];

  public selectedLanguage: any = {
    language: "English",
    code: "en",
    type: "US",
    icon: "us",
  };

  public languages: any[] = [
    {
      language: "English",
      code: "en",
      type: "US",
      icon: "us",
    },
    {
      language: "Español",
      code: "es",
      icon: "es",
    },
    {
      language: "Français",
      code: "fr",
      icon: "fr",
    },
    {
      language: "German",
      code: "de",
      icon: "de",
    },
  ];

  ngAfterContentChecked() {
    this.currentRoute = window.location.href.split("/").pop() || "";
    this.cdr.detectChanges();
  }

  changeLanguage(lang: any) {
    // this.translate.use(lang.code);
    this.selectedLanguage = lang;
  }

  logout() {
    this.authService.logout();
  }

  open() {
    this.openVar = "show";
  }
  close() {
    this.openVar = "";
  }

  goToMyProfile() {
    this.router.navigate([
      "/profile",
      this.authService.currentUserValue.user.id,
    ]);
  }
}
