import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from "@angular/router";
import {SavedContentComponent} from "./saved-content.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: "",
    component: SavedContentComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    SavedContentComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
  ]
})
export class SavedContentModule { }
