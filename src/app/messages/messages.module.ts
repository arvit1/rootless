import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { MessagesComponent } from "./messages.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    component: MessagesComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    MessagesComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class MessagesModule { }
