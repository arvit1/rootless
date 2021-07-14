import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ApplyBlueprint, Industry } from "../../_models";
import { BlueprintService } from "../../_services";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: "app-create-blueprint",
  templateUrl: "./create-blueprint.component.html",
  styleUrls: ["./create-blueprint.component.scss"],
  styles: [`:host ::ng-deep .iti {
    width: 100%;
  }`]
})
export class CreateBlueprintComponent {

  blueprint!: ApplyBlueprint
  myForm: FormGroup;
  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.UnitedStates];
  industries: Industry[] = []

  constructor(private blueprintService: BlueprintService, private fb: FormBuilder,
              private toastr: ToastrService) {
    this.blueprintService.getIndustries().subscribe((res) => {
      this.industries = res
    });

    this.myForm = fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$"),]],
      industryId: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      position: ['', [Validators.required]],
      location: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  onSubmit(myForm: FormGroup) {
    this.blueprint = {
      fullName: myForm.value.fullName,
      email: myForm.value.email,
      phone: myForm.value.phone.internationalNumber,
      industryId: myForm.value.industryId,
      companyName: myForm.value.companyName,
      position: myForm.value.position,
      location: myForm.value.location,
      description: myForm.value.description
    }

    this.blueprintService.create(this.blueprint).subscribe(done => {
      this.toastr.success('Blueprint created successfully');
      console.log('blueprint: ', this.blueprint)
    },(error: HttpErrorResponse) => {
        this.toastr.error("An error has happened");
        console.log(error)
      })
  }

}
