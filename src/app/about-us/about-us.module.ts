import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AboutUsComponent} from "./about-us.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: "",
    component: AboutUsComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
  ]
})
export class AboutUsModule { }
