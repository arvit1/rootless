import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/internal/Subscription";
import { Course, Expert } from "src/app/_models";
import { AuthenticationService, CourseService } from "src/app/_services";

@Component({
  selector: "app-course-view",
  templateUrl: "./course-view.component.html",
  styleUrls: ["./course-view.component.scss"],
})
export class CourseViewComponent {
  active = 1;
  content = true;
  course!: Course;
  videos: Course[] = [];
  private courseSubscribe = new Subscription();
  experts: Expert[] = [];

  checkout = false;
  userRole = ""
  currentVideoIndex = 0;
  currentVideoUrl = "";
  completion = 0;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) {
    this.courseService
      .getCourseVideo(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.videos = res;
        this.currentVideoIndex = this.videos.findIndex(
          (video) => !video.watched
        );
        this.getVideoUrl();
      });

    // @ts-ignore
    this.userRole = this.authService.currentUserValue
      ? this.authService.getRole()
      : "";

    this.courseService.getExperts().subscribe((res) => {
      this.experts = res.items;
    });

    this.courseSubscribe = this.courseService
      .getById(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.course = res;
      });

    this.courseService
      .getCourseCompletion(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.completion = res.courseCompletionPercentage * 100;
      });
  }

  getExpert(id: number) {
    return this.experts.filter((expert) => expert.id === id)[0];
  }

  getVideoUrl() {
    this.courseService
      .getVideoUrl(
        this.videos[
          this.currentVideoIndex !== -1
            ? this.currentVideoIndex
            : this.videos.length - 1
        ].videoFilePath
      )
      .subscribe((res) => {
        this.currentVideoUrl = res.signedUrl;
      });
  }

  setWatched() {
    this.courseService
      .setWatched(this.course.id, this.videos[this.currentVideoIndex].id)
      .subscribe((course) => {
        this.videos[this.currentVideoIndex].watched = true;
        if (this.currentVideoIndex < this.videos.length) {
          this.currentVideoIndex++;
          this.getVideoUrl();
        }
      });
  }

  setCurrentVideo(index: number) {
    this.currentVideoIndex = index;
    this.getVideoUrl();
  }

  showContent() {
    this.content = !this.content;
  }
}
