import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NotificationsComponent} from "./notifications.component";

const routes: Routes = [
  {
    path: "",
    component: NotificationsComponent,
    // canActivate: [AuthGuard],
  },
];


@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
  ]
})
export class NotificationsModule { }
