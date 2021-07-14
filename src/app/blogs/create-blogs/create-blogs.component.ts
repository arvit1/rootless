import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Blog, Industry } from "src/app/_models";
import { BlogService } from "src/app/_services";
import { UploadService } from "src/app/_services/upload.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: "app-create-blogs",
  templateUrl: "./create-blogs.component.html",
  styleUrls: ["./create-blogs.component.scss"],
})
export class CreateBlogsComponent implements OnInit {
  blogForm: FormGroup;
  coverPhotoUrl = 'assets/images/noImage.png';
  industries: Industry[] = []

  constructor(private uploadService: UploadService, private formBuilder: FormBuilder,
    private blogService: BlogService, private router: Router,
              private toastr: ToastrService) {
    this.blogForm = this.formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      tags: ["", Validators.required],
      industryId: ["", Validators.required],
      photoUrl: ["", Validators.required]
    });

    this.blogService.getIndustries().subscribe((res) => {
      this.industries = res
    });
  }

  ngOnInit(): void { }

  uploadFile(event: any) {
    if (event.target.files.length === 0) {
      return;
    }
    const file: File = event.target.files[0];

    this.uploadService.getSignedUrl(file, "image").subscribe((res) => {
      this.uploadService.uploadToS3(res, file).subscribe((response) => {
        this.toastr.success('Uploaded successfully');
        this.coverPhotoUrl = res.filename
      },error => {
        this.toastr.error(error.message);
      })
    })
  }

  onSubmit(e: any, submitted: boolean) {
    e.preventDefault();

    if (this.blogForm.invalid) {
      return;
    }

    const payload: Blog = {
      coverPhotoUrl: this.coverPhotoUrl,
      title: this.blogForm.controls.title.value,
      content: this.blogForm.controls.content.value,
      tags: [this.blogForm.controls.tags.value],
      submitted,
      approved: true,
      industryId: this.blogForm.controls.industryId.value,
      featured: false
    }

    this.blogService
      .create(payload)
      .subscribe(
        (blog) => {
          this.toastr.success('Uploaded successfully');
          if (blog) {
            this.router.navigate(["blog"]);
          }
        },
        (error: HttpErrorResponse) => {
          this.toastr.error("An error has happened");
          console.log(error)
        }
      );
  }
}
