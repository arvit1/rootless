import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "src/app/_services/authentication.service";
import { ExpertService } from "src/app/_services/expert.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: "app-hire-expert",
  templateUrl: "./hire-expert.component.html",
  styleUrls: ["./hire-expert.component.scss"],
})
export class HireExpertComponent {
  expertForm!: FormGroup;
  expertId = 0;

  constructor(
    private fb: FormBuilder, private route: ActivatedRoute,
    private router: Router, private authService: AuthenticationService,
    private expertService: ExpertService, private toastr: ToastrService
  ) {
    this.expertId = this.route.snapshot.params.id;

    this.expertForm = fb.group({
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      prefComm: ['', [Validators.required]],
      reason: ['', [Validators.required]]
    });
  }

  onSubmit(expertForm: FormGroup) {
    const payload = {
      expertId: +this.expertId,
      rootlessId: this.authService.currentUserValue.user.id,
      phone: expertForm.value.phone,
      email: expertForm.value.email,
      prefComm: expertForm.value.prefComm,
      reason: expertForm.value.reason
    }

    this.expertService.hireExpert(payload).subscribe(res => {
      this.toastr.success("Expert hired successfully")
      this.router.navigate(['/profile', +this.expertId])
    }, (error: HttpErrorResponse) => {
      this.toastr.error("An error has happened")
      console.log(error.error.detail)
    })
  }
}
