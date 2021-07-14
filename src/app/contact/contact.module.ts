import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ContactComponent} from "./contact.component";

const routes: Routes = [
  {
    path: "",
    component: ContactComponent,
    // canActivate: [AuthGuard],
    // data: { roles: [RoleEnum.EXPERT] },
  },
];

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ContactModule { }
