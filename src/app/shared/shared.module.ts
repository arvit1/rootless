import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SingupComponent} from "./signup/singup.component";
import {InterestsComponent} from "./signup/interests/interests.component";
import {CheckoutComponent} from "./signup/checkout/checkout.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {TypeaheadComponent} from "./typeahead/typeahead.component";
import {RecoverPswComponent} from "./recover_psw/recover_psw.component";



@NgModule({
  declarations: [
    SingupComponent,
    InterestsComponent,
    CheckoutComponent,
    TypeaheadComponent,
    RecoverPswComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  exports: [
    SingupComponent
  ]
})
export class SharedModule { }
