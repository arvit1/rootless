import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Blueprint, Industry } from "../_models";
import { AuthenticationService, BlueprintService } from "../_services";

@Component({
  selector: "app-blueprint",
  templateUrl: "./blueprint.component.html",
  styleUrls: ["./blueprint.component.scss"],
})
export class BlueprintComponent implements OnDestroy {
  monthBlueprints: Blueprint[] = [];
  tailoredBlueprints: Blueprint[] = [];
  blueprints: Blueprint[] = [];
  private blueprintSubscribe = new Subscription();
  private tailoredSubscribe = new Subscription();
  private searchSubscribe = new Subscription();
  industries: Industry[] = [];
  paging = {
    page: 0,
    size: 10,
    total: 0,
  };
  search: string = "";
  selectedIndustry: any;
  userRole = '';

  constructor(private blueprintService: BlueprintService, private authService: AuthenticationService) {
    var html = <HTMLVideoElement>document.querySelector("#html");
    html.style.scrollBehavior = "auto";
    this.blueprintService.getIndustries().subscribe((res) => {
      this.industries = res;
    });

    this.getBlueprints();

    this.blueprintSubscribe = this.blueprintService
      .getTailored()
      .subscribe((res) => {
        this.tailoredBlueprints = res.items;
      });

    // @ts-ignore
    this.userRole = this.authService.currentUserValue
      ? this.authService.getRole()
      : "";
  }

  getBlueprints() {
    // empty array if first page
    if (this.paging.page === 0) {
      this.blueprints = [];
    }
    this.blueprintSubscribe = this.blueprintService
      .getAll(
        this.paging.page,
        this.paging.size,
        this.search ? this.search : "",
        this.selectedIndustry ? this.selectedIndustry : ""
      )
      .subscribe((res) => {
        // ignore blueprintOfTheMonth if im searching
        if (!this.search) {
          this.monthBlueprints = res.items.filter((blueprint) => {
            return blueprint.blueprintOfTheMonth === true;
          });
        }
        this.blueprints = this.blueprints.concat(res.items);
        this.paging.page = res.page;
        this.paging.size = res.size;
        this.paging.total = res.total;
      });
  }

  getMediaUrl(pathName: string) {
    this.blueprintService.getMediaUrl(pathName).subscribe((res) => {
      window.open(res.signedUrl, '_blank')
    }, error => {
      console.log(error)
    });
  }

  getIndustryName(id: number) {
    return this.industries.filter((industry) => industry.id === id)[0].name;
  }

  loadMore() {
    this.paging.page++;
    this.getBlueprints();
  }

  ngOnDestroy(): void {
    this.blueprintSubscribe.unsubscribe();
    this.tailoredSubscribe.unsubscribe();
  }

  onEnter() {
    this.paging.page = 0;
    this.getBlueprints();
  }

  setIndustry(id: any) {
    this.selectedIndustry = id;
    this.onEnter();
  }
}
