import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FaqComponent} from "./faq.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: FaqComponent,
  },
];

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
  ]
})
export class FaqModule { }
