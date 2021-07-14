import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Expert, Industry } from "src/app/_models";
import { ExpertService } from "../_services/expert.service";

@Component({
  selector: "app-experts",
  templateUrl: "./experts.component.html",
  styleUrls: ["./experts.component.scss"],
})
export class ExpertsComponent implements OnDestroy {
  private expertSubscribe = new Subscription();
  experts: Expert[] = [];
  industries: Industry[] = [];
  paging = {
    page: 0,
    size: 10,
    total: 0,
  };
  search: string = "";
  selectedIndustry: any;

  constructor(private expertService: ExpertService) {
    var html = <HTMLVideoElement>document.querySelector("#html");
    html.style.scrollBehavior = "auto";
    this.expertService.getIndustries().subscribe((res) => {
      this.industries = res;
    });

    this.getExperts();
  }

  ngOnDestroy(): void {
    this.expertSubscribe.unsubscribe();
  }

  getExperts() {
    // empty array if first page
    if (this.paging.page === 0) {
      this.experts = [];
    }
    this.expertSubscribe = this.expertService
      .getAll(
        this.paging.page,
        this.paging.size,
        this.search ? this.search : "",
        this.selectedIndustry ? this.selectedIndustry : ""
      )
      .subscribe((res) => {
        this.experts = this.experts.concat(res.items);
        this.paging.page = res.page;
        this.paging.size = res.size;
        this.paging.total = res.total;
        console.log(this.experts)
      });
  }

  onEnter() {
    this.paging.page = 0;
    this.getExperts();
  }

  setIndustry(id: any) {
    this.selectedIndustry = id;
    this.onEnter();
  }

  loadMore() {
    this.paging.page++;
    this.getExperts();
  }
}
