import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateEventsComponent} from "./create-events/create-events.component";
import {EventsComponent} from "./events.component";
import {SingleEventComponent} from "./single-event/single-event.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FullcalendarModule} from "../fullcalendar/fullcalendar.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MomentModule} from "ngx-moment";
import {SharedModule} from "../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
  {
    path: 'create',
    component: CreateEventsComponent,
  },
  {
    path: ':id',
    component: SingleEventComponent,
  },
];

@NgModule({
  declarations: [
    EventsComponent,
    CreateEventsComponent,
    SingleEventComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FullcalendarModule,
    NgbModule,
    MomentModule,
    SharedModule
  ]
})
export class EventsModule { }
