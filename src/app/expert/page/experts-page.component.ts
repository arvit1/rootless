import { Component, OnDestroy } from "@angular/core"
import { AuthenticationService, BlogService, BlueprintService, CourseService, ForumService } from "../../_services"
import { Blog, Blueprint, Course, Event, Expert, Forum, Story, User } from "../../_models"
import { ExpertService } from "../../_services/expert.service"
import { Subscription } from "rxjs"
import { EventService } from "../../_services/event.service";
import * as moment from 'moment';

@Component({
  templateUrl: "experts-page.component.html",
  styleUrls: ["experts-page.component.scss"],
})
export class ExpertsPageComponent implements OnDestroy {
  isLoggedIn = false
  blueprints: Blueprint[] = []
  experts: Expert[] = []
  courseExperts: Expert[] = []
  blogs: Blog[] = []
  courses: Course[] = []
  private blueprintSubscribe = new Subscription()
  private expertSubscribe = new Subscription()
  private blogSubscribe = new Subscription()
  private courseSubscribe = new Subscription()

  constructor(
    private authenticationService: AuthenticationService,
    private blueprintService: BlueprintService,
    private expertService: ExpertService,
    private blogService: BlogService,
    private eventService: EventService,
    private courseService: CourseService
  ) {
    this.isLoggedIn = this.authenticationService.isLoggedIn()
    this.courseService.getExperts().subscribe((res) => {
      this.courseExperts = res.items;
    });
    this.expertSubscribe = this.expertService.getAll(0, 3).subscribe(res => {
      this.experts = res.items
    })
    this.blueprintSubscribe = this.blueprintService.getAll(0, 3).subscribe(res => {
      this.blueprints = res.items
    })
    this.blogSubscribe = this.blogService.getAll(0, 3).subscribe(res => {
      this.blogs = res.items
    })
    this.courseSubscribe = this.courseService.getAll(0, 3).subscribe(res => {
      this.courses = res.items
    })
  }

  get currentUser(): User {
    return this.authenticationService.currentUserValue.user
  }

  getMediaUrl(pathName: string) {
    this.blueprintService.getMediaUrl(pathName).subscribe((res) => {
      window.open(res.signedUrl, '_blank')
    }, error => {
      console.log(error)
    });
  }

  getExpert(id: number) {
    return this.courseExperts.filter((expert) => expert.id === id)[0];
  }

  getTime(time: string) {
    return moment(time).fromNow()
  }

  ngOnDestroy(): void {
    this.blueprintSubscribe.unsubscribe()
    this.expertSubscribe.unsubscribe()
    this.blogSubscribe.unsubscribe()
    this.courseSubscribe.unsubscribe()
  }
}
