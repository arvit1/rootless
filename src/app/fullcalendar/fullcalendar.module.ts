import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FullcalendarComponent} from "./fullcalendar.component";
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";



@NgModule({
  declarations: [
    FullcalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [
    FullcalendarComponent
  ]
})
export class FullcalendarModule { }
