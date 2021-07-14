import {Component, OnDestroy, OnInit} from "@angular/core";
import {SearchService} from "../_services";
import {Search} from "../_models";
import {Subscription} from "rxjs";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit, OnDestroy {
  term = 'music';
  search: Search;
  animation = "";
  show = "";
  private searchSubscribe = new Subscription();

  constructor(private searchService: SearchService) {
    this.search = {
      size: 0,
      courses: [],
      blueprints: [],
      events: [],
      forums: [],
      experts: [],
      blogs: []
    }
  }

  ngOnInit(): void { }

  searchFunction(e: any) {
    console.log(e);
    if (e.keyCode === 13) {
      this.getSearch(this.term);
    }
  }

  getSearch(title: string) {
    this.searchSubscribe = this.searchService.getAll().subscribe(res => {
      console.log(res)
      this.search = res;
      this.animation = "animation";
      this.show = "show";
    });
  }

  ngOnDestroy(): void {
    this.searchSubscribe.unsubscribe();
  }
}
