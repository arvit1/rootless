import { Component, OnDestroy, OnInit } from "@angular/core";
import { BlogService, BlueprintService, ForumService } from "../_services";
import { Blog, Blueprint, Forum } from "../_models";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-saved-content",
  templateUrl: "./saved-content.component.html",
  styleUrls: ["./saved-content.component.scss"],
})
export class SavedContentComponent implements OnInit, OnDestroy {
  active = 1;
  blogs: Blog[] = [];
  forums: Forum[] = [];
  blueprints: Blueprint[] = [];
  private blogSubscribe = new Subscription();
  private forumSubscribe = new Subscription();
  private blueprintSubscribe = new Subscription();

  constructor(private blogService: BlogService,
    private forumService: ForumService,
    private blueprintService: BlueprintService) { }

  ngOnInit() {
    // this.blogSubscribe = this.blogService.getAll(0, 10).subscribe(res => {
    //   this.blogs = res.items;
    // });
    this.forumSubscribe = this.forumService.getAll().subscribe(res => {
      this.forums = res;
    });
    this.blueprintSubscribe = this.blueprintService.getAll(0, 10).subscribe(res => {
      // this.blueprints = res;
    });
  }

  ngOnDestroy(): void {
    this.blogSubscribe.unsubscribe();
    this.forumSubscribe.unsubscribe();
    this.blueprintSubscribe.unsubscribe();
  }
}
