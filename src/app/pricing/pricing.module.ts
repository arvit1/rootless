import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PricingComponent} from "./pricing.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: "",
    component: PricingComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
  ]
})
export class PricingModule { }
