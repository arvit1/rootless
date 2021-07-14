import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BlogsComponent } from "./blogs.component";
import { SingleBlogComponent } from "./single-blog/single-blog.component";
import { CreateBlogsComponent } from "./create-blogs/create-blogs.component";
import { QuillModule } from "ngx-quill";
import { AuthGuard } from '../_guards';
import { RoleEnum } from '../_models';
import { MomentModule } from "ngx-moment";

const routes: Routes = [
  {
    path: "",
    component: BlogsComponent,
  },
  {
    path: "create",
    component: CreateBlogsComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleEnum.EXPERT] },
  },
  {
    path: ":id",
    component: SingleBlogComponent,
  },
];

@NgModule({
  declarations: [
    BlogsComponent,
    CreateBlogsComponent,
    SingleBlogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MomentModule,
    QuillModule.forRoot()
  ]
})
export class BlogsModule { }
