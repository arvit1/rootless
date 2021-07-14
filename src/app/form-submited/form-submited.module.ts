import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {MessagesComponent} from "../messages/messages.component";
import {FormSubmitedComponent} from "./form-submited.component";

const routes: Routes = [
  {
    path: "",
    component: FormSubmitedComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    FormSubmitedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormSubmitedModule { }
