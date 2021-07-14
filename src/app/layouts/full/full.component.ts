import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-full-layout",
  templateUrl: "./full.component.html",
  styleUrls: ["./full.component.scss"],
})
export class FullComponent implements OnInit {
  public config: PerfectScrollbarConfigInterface = {};
  user = localStorage.getItem("USER") ? localStorage.getItem("USER") : "";
  constructor(public router: Router, private modalService: NgbModal) {}

  closeResult = "";

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  tabStatus = "justified";

  public isCollapsed = false;

  public innerWidth: any;
  public defaultSidebar: any;
  public showSettings = false;
  public showMobileMenu = false;
  public expandLogo = false;

  options = {
    theme: "light", // two possible values: light, dark
    dir: "ltr", // two possible values: ltr, rtl
    layout: "vertical", // fixed value. shouldn't be changed.
    sidebartype: "full", // four possible values: full, iconbar, overlay, mini-sidebar
    sidebarpos: "absolute", // two possible values: fixed, absolute
    headerpos: "absolute", // two possible values: fixed, absolute
    boxed: "full", // two possible values: full, boxed
    navbarbg: "skin1", // six possible values: skin(1/2/3/4/5/6)
    sidebarbg: "skin6", // six possible values: skin(1/2/3/4/5/6)
    logobg: "skin6", // six possible values: skin(1/2/3/4/5/6)
  };

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    if (this.router.url === "/") {
      this.router.navigate(["/dashboard/classic"]);
    }
    this.defaultSidebar = this.options.sidebartype;
    this.handleSidebar();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: string) {
    this.handleSidebar();
  }

  handleSidebar() {
    this.innerWidth = window.innerWidth;
    switch (this.defaultSidebar) {
      case "full":
      case "iconbar":
        if (this.innerWidth < 1170) {
          this.options.sidebartype = "mini-sidebar";
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      case "overlay":
        if (this.innerWidth < 767) {
          this.options.sidebartype = "mini-sidebar";
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }

  toggleSidebarType() {
    switch (this.options.sidebartype) {
      case "full":
      case "iconbar":
        this.options.sidebartype = "mini-sidebar";
        break;

      case "overlay":
        this.showMobileMenu = !this.showMobileMenu;
        break;

      case "mini-sidebar":
        if (this.defaultSidebar === "mini-sidebar") {
          this.options.sidebartype = "full";
        } else {
          this.options.sidebartype = this.defaultSidebar;
        }
        break;

      default:
    }
  }
}
