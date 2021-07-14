import { Component } from "@angular/core";
import { CourseService } from "../../_services";
import { Course } from "../../_models";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: "app-create-course",
  templateUrl: "./create-course.component.html",
  styleUrls: ["./create-course.component.scss"],
})
export class CreateCourseComponent {
  course!: any
  myForm: FormGroup
  clickedDates: number[] = []

  constructor(private courseService: CourseService, private fb: FormBuilder,
              private router: Router, private toastr: ToastrService) {
    this.myForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
      date: ['', [Validators.required]],
      dates: ['', [Validators.required]],
    });
  }

  onSubmit(myForm: FormGroup) {
    this.course = {
      description: myForm.value.description,
      courseName: myForm.value.title,
      location: myForm.value.location,
      time: new Date(myForm.value.date).getTime(),
      dates: [...new Set(this.sort(this.clickedDates))]
    }

    this.courseService.create(this.course).subscribe(course => {
      this.toastr.success('Course created successfully');
      this.router.navigate(['/courses']);
    },(error: HttpErrorResponse) => {
      this.toastr.error("An error has happened");
      console.log(error)
    })

  }

  addDates(date: number) {
    this.clickedDates.push(date)
    this.myForm.value.dates = this.clickedDates
    console.log('clickedDates ', this.myForm.value.dates)
    this.myForm.controls.dates.setErrors(null)
  }

  private sort(dates: number[]): number[] {
    return dates.sort((a, b) => {
      return a - b;
    });
  }
}
