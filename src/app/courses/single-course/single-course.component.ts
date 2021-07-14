import { Component, OnDestroy, OnInit } from "@angular/core";
import { CourseService } from "../../_services/course.service";
import { Subscription } from "rxjs";
import { Course, Expert } from "../../_models";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "src/app/_services/authentication.service";

@Component({
  selector: "app-single-course",
  templateUrl: "./single-course.component.html",
  styleUrls: ["./single-course.component.scss"],
})
export class SingleCourseComponent implements OnDestroy {
  course!: Course;
  private courseSubscribe = new Subscription();
  experts: Expert[] = []

  checkout = false;
  userRole = ""

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router,
  ) {

    // @ts-ignore
    this.userRole = this.authService.currentUserValue
      ? this.authService.getRole()
      : "";

    this.courseService.getExperts().subscribe((res) => {
      this.experts = res.items
    });

    this.courseSubscribe = this.courseService
      .getById(this.route.snapshot.params.id)
      .subscribe((res) => {
        this.course = res;
      });
  }

  getExpert(id: number) {
    return this.experts.filter(expert => expert.id === id)[0];
  }

  ngOnDestroy(): void {
    this.courseSubscribe.unsubscribe();
  }

  enroll(id: number) {
    // this.checkout = true;
    // if (this.userRole === 'ROOTLESS') {
    this.courseService.enroll(id).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/courses/view/', id]);
    })
    // } else {
    //   // what to do if user is not rootless?
    // }
  }

  upgrade(courseId: number) {
    this.router.navigate(['/courses/checkout/', courseId]);
  }
}
