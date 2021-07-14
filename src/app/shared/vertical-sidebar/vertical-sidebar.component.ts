import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "src/app/_services";
import { RouteInfo } from "./vertical-sidebar.metadata";
import { VerticalSidebarService } from "./vertical-sidebar.service";

@Component({
  selector: "app-vertical-sidebar",
  templateUrl: "./vertical-sidebar.component.html",
})
export class VerticalSidebarComponent {
  showMenu = "";
  showSubMenu = "";
  public sidebarnavItems: RouteInfo[] = [];
  path = "";
  profilePic =
    localStorage.getItem("profilePic") &&
    localStorage.getItem("profilePic") !== "null"
      ? localStorage.getItem("profilePic")
      : "";
  firstName = localStorage.getItem("firstName");
  lastName = localStorage.getItem("lastName");
  email = localStorage.getItem("email");

  constructor(
    private menuServise: VerticalSidebarService,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.menuServise.items.subscribe((menuItems) => {
      this.sidebarnavItems = menuItems;

      // Active menu
      this.sidebarnavItems.filter((m) =>
        m.submenu.filter((s) => {
          if (s.path === this.router.url) {
            this.path = m.title;
          }
        })
      );
      this.addExpandClass(this.path);
    });
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = "0";
    } else {
      this.showMenu = element;
    }
  }

  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = "0";
    } else {
      this.showSubMenu = element;
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  logout() {
    this.authService.logout();
  }

  goToMyProfile() {
    this.router.navigate([
      "/profile",
      this.authService.currentUserValue.user.id,
    ]);
  }
}
