import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes } from "@angular/router";
import { SearchComponent } from "./search.component";
import { FormsModule } from "@angular/forms";
import { MomentModule } from "ngx-moment";
const routes: Routes = [
  {
    path: "",
    component: SearchComponent,
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, MomentModule],
})
export class SearchModule {}
