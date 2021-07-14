import { Component, OnDestroy, OnInit } from "@angular/core";
import { CourseService } from "../_services/course.service";
import { Subscription } from "rxjs";
import { Expert, Course } from "src/app/_models";
import { AuthenticationService } from "../_services";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit, OnDestroy {
  private coursesSubscribe = new Subscription();
  private enrolledCoursesSubscribe = new Subscription();
  popularCourses: Course[] = [];
  allCourses: Course[] = [];
  enrolledCourses: Course[] = [];
  experts: Expert[] = [];
  topics = [];
  paging = {
    page: 0,
    size: 10,
    total: 0,
  };
  search: string = "";
  selectedTopic: any;
  userRole = ""
  user = localStorage.getItem("USER") ? localStorage.getItem("USER") : "";
  constructor(
    private courseService: CourseService,
    private authService: AuthenticationService
  ) {
    var html = <HTMLVideoElement>document.querySelector("#html");
    html.style.scrollBehavior = "auto";
    this.courseService.getExperts().subscribe((res) => {
      this.experts = res.items;
    });

    this.courseService.getTopics().subscribe((res) => {
      this.topics = res.topics;
    });

    //@ts-ignore
    this.userRole = this.authService.currentUserValue
      ? this.authService.getRole()
      : "";

    console.log(this.userRole)

    this.getEnrolledCourses();

    this.getCourses();
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.coursesSubscribe.unsubscribe();
  }

  getCourses() {
    // empty array if first page
    if (this.paging.page === 0) {
      this.allCourses = [];
    }
    this.coursesSubscribe = this.courseService
      .getAll(
        this.paging.page,
        this.paging.size,
        this.search ? this.search : "",
        this.selectedTopic ? this.selectedTopic : ""
      )
      .subscribe((res) => {
        // ignore course if im searching
        if (!this.search && this.paging.page === 0) {
          this.popularCourses = res.items.filter((course) => {
            return course.popular;
          });
        }
        this.allCourses = this.allCourses.concat(res.items);
        this.paging.page = res.page;
        this.paging.size = res.size;
        this.paging.total = res.total;
      });
  }

  getEnrolledCourses() {
    this.enrolledCoursesSubscribe = this.courseService
      .getEnrolledCourses()
      .subscribe((res) => {
        this.enrolledCourses = res.items;
      });
  }

  getExpert(id: number) {
    return this.experts.filter((expert) => expert.id === id)[0];
  }

  loadMore() {
    this.paging.page++;
    this.getCourses();
  }

  onEnter() {
    this.paging.page = 0;
    this.getCourses();
  }

  setTopic(topic: any) {
    this.selectedTopic = topic;
    this.onEnter();
  }
}
