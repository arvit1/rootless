import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Event } from "../../_models";
import { EventService } from "../../_services";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: "app-create-events",
  templateUrl: "./create-events.component.html",
  styleUrls: ["./create-events.component.scss"],
})
export class CreateEventsComponent {
  event!: Event
  myForm: FormGroup
  clickedDates: number[] = []

  constructor(private eventService: EventService, private fb: FormBuilder,
              private toastr: ToastrService) {

    this.myForm = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
      maxParticipants: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      date: ['', [Validators.required]],
      dates: ['', [Validators.required]],
    });
  }

  onSubmit(myForm: FormGroup) {
    this.event = {
      maxParticipants: myForm.value.maxPartecipants,
      description: myForm.value.description,
      title: myForm.value.title,
      duration: myForm.value.duration,
      purpose: myForm.value.purpose,
      tags: [],
      fee: 269,
      imgUrl: 'img url',
      imgTitle: 'img title',
      date: new Date(myForm.value.date).getTime(),
      dates: [...new Set(this.sort(this.clickedDates))],
      from: [
        // {
        //   // profession: 'foo profession',
        //   imgUrl: 'Foo imageUrl',
        //   description: 'foo description',
        //   firstName: 'foo firstname',
        //   lastName: 'foo lastname',
        //   email: 'foo email',
        //   phone: 'foo phone'
        // }
      ]
    }

    this.eventService.getAll().subscribe(res => {
      console.log('before ', res)
    })

    this.eventService.create(this.event).subscribe(done => {
      this.eventService.getAll().subscribe(res => {
        this.toastr.success("Event created successfully")
        console.log('after ', res)
      }, (error: HttpErrorResponse) => {
        this.toastr.error("An error has happened")
      })
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
