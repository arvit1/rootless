import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs/internal/Subscription";
import {Blog, Expert, Industry} from "src/app/_models";
import {BlogService} from "src/app/_services";
import * as moment from "moment";

@Component({
  selector: "app-blogs",
  templateUrl: "./blogs.component.html",
  styleUrls: ["./blogs.component.scss"],
})
export class BlogsComponent implements OnInit, OnDestroy {
  paging = {
    page: 0,
    size: 10,
    total: 0,
  };
  blogs: Blog[] = [];
  private blogSubscribe = new Subscription();
  industries: Industry[] = [];
  search: string = "";
  selectedIndustry: any;
  featuredBlog: Blog[] = [];
  experts: Expert[] = [];

  constructor(private blogService: BlogService) {
    this.blogService.getIndustries().subscribe((res) => {
      this.industries = res;
    });

    this.blogService.getExperts().subscribe((res) => {
      this.experts = res.items;
    });

    this.getBlogs();
    const html = document.querySelector("#html") as HTMLVideoElement;
    html.style.scrollBehavior = "auto";
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.blogSubscribe.unsubscribe();
  }

  getBlogs() {
    // empty array if first page
    if (this.paging.page === 0) {
      this.blogs = [];
    }
    this.blogSubscribe = this.blogService
      .getAll(
        this.paging.page,
        this.paging.size,
        this.search ? this.search : "",
        this.selectedIndustry ? this.selectedIndustry : ""
      )
      .subscribe((res) => {
        // ignore blueprintOfTheMonth if im searching
        if (!this.search) {
          this.featuredBlog = res.items.filter((blog) => {
            return blog.featured === true;
          });
        }
        this.blogs = res.items;
        this.paging.page = res.page;
        this.paging.size = res.size;
        this.paging.total = res.total;
      });
  }

  onEnter() {
    this.paging.page = 0;
    this.getBlogs();
  }

  setIndustry(id: any) {
    this.selectedIndustry = id;
    this.onEnter();
  }

  getTime(time: string) {
    return moment(time).fromNow();
  }

  getExpert(id: number) {
    return this.experts.filter((expert) => expert.id === id)[0];
  }
}
