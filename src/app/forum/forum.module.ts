import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ForumComponent} from "./forum.component";

const routes: Routes = [
  {
    path: "",
    component: ForumComponent,
    // canActivate: [AuthGuard],
  },
];


@NgModule({
  declarations: [
    ForumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ForumModule { }
