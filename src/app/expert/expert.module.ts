import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ExpertsPageComponent } from "./page/experts-page.component";
import { ExpertsComponent } from "./experts.component";
import { PricingExpertComponent } from "./pricing/pricing-experts.component";
import { HireExpertComponent } from "./hire-expert/hire-expert.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MomentModule } from "ngx-moment";

const routes: Routes = [
  {
    path: "",
    component: ExpertsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: "feed",
    component: ExpertsPageComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: "pricing",
    component: PricingExpertComponent,
  },
  {
    path: "hire/:id",
    component: HireExpertComponent,
  },
];

@NgModule({
  declarations: [
    ExpertsPageComponent,
    ExpertsComponent,
    PricingExpertComponent,
    HireExpertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule
  ],
})
export class ExpertModule { }
