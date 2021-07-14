import { Component, OnDestroy } from '@angular/core';
import { Blog, Expert } from "../../_models";
import { Subscription } from "rxjs";
import { BlogService } from "../../_services";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnDestroy {

  private id: number;
  blog!: Blog;
  private blogSubscribe: Subscription;
  experts: Expert[] = [];

  constructor(private blogService: BlogService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
    this.blogService.getExperts().subscribe((res) => {
      this.experts = res.items;
    });

    this.blogSubscribe = this.blogService.getById(this.id).subscribe(res => {
      this.blog = res;
    });
  }

  ngOnDestroy(): void {
    this.blogSubscribe.unsubscribe();
  }

  getTime(time: string) {
    return moment(time).fromNow();
  }

  getExpert(id: number) {
    return this.experts.filter((expert) => expert.id === id)[0];
  }

}
