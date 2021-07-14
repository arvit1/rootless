import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BlueprintComponent } from "./blueprint.component";
import { SingleBlueprintComponent } from "./single-blueprint/single-blueprint.component";
import { CreateBlueprintComponent } from "./create-blueprint/create-blueprint.component";
import { NgxIntlTelInputModule } from "ngx-intl-tel-input";

const routes: Routes = [
  {
    path: "",
    component: BlueprintComponent,
  },
  {
    path: "apply",
    component: CreateBlueprintComponent,
  },
  {
    path: ":id",
    component: SingleBlueprintComponent,
  },
];

@NgModule({
  declarations: [
    BlueprintComponent,
    CreateBlueprintComponent,
    SingleBlueprintComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    NgxIntlTelInputModule,
    ReactiveFormsModule
  ]
})
export class BlueprintsModule { }
