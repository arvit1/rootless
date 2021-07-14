import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SingleCourseComponent } from "./single-course/single-course.component";
import { CheckoutCourseComponent } from "./checkout/checkout.component";
import { RouterModule, Routes } from "@angular/router";
import { CourseViewComponent } from "./course-view/course-view.component";
import { CreateCourseComponent } from "./create-course/create-course.component";
import { CoursesComponent } from "./courses.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FullcalendarModule } from "../fullcalendar/fullcalendar.module";
import { AuthGuard } from "../_guards/auth.guard";
import { RoleEnum } from "../_models";

const routes: Routes = [
  {
    path: "",
    component: CoursesComponent,
  },
  {
    path: 'view/:id',
    component: CourseViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "create",
    component: CreateCourseComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleEnum.EXPERT] }
  },
  {
    path: "checkout/:id",
    component: CheckoutCourseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ":id",
    component: SingleCourseComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  declarations: [
    CoursesComponent,
    CourseViewComponent,
    CreateCourseComponent,
    SingleCourseComponent,
    CheckoutCourseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    FullcalendarModule,
    NgbModule
  ],
})
export class CoursesModule { }
