import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import {
  ScriptService,
  SettingsService,
  SubscriptionService,
} from "src/app/_services";
import * as moment from "moment";
import { MustMatch } from "../_helpers/must-match.validator";
import { resolveSanitizationFn } from "@angular/compiler/src/render3/view/template";


@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
})
export class SettingsComponent {
  active = 1;

  // account
  email = "";

  // password
  changePasswordForm: FormGroup;
  submitted = false;
  apiError = "";
  changedPass = false;

  //subscription
  @ViewChild("stripeContainer") stripeContainer!: ElementRef;
  apiKey =
    "pk_test_51IuramKS6RGYhZsQ3yiyJAAucVW2FpHLQUHnOK3VaiC5felFD1UjqwSP2JWBzRpNnBIrIPuDyH0VnIsgph2wV7av00CeaRCG8A"; // replace me
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  stripe: any;
  elements: any;
  form: any;
  resetButton: any;
  errorvisible = false;
  errorMessage = "";
  changingCard = false;
  cardChanged = false;

  invoices = [];

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsService,
    private scriptService: ScriptService,
    private subService: SubscriptionService
  ) {
    // var html = <HTMLVideoElement>document.querySelector("#html");
    // html.style.scrollBehavior = "auto";
    this.changePasswordForm = fb.group(
      {
        password: ["", [Validators.required]],
        newPassword: ["", [Validators.required]],
        confirmPassword: ["", [Validators.required]],
      },
      {
        validator: MustMatch("newPassword", "confirmPassword"),
      }
    );

    this.getInvoices();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.changePasswordForm.controls;
  }

  onSubmitPass() {
    this.submitted = true;
    this.apiError = "";
    this.changedPass = false;
    if (this.changePasswordForm.invalid) {
      return;
    }

    this.settingsService
      .updatePassword({
        oldPassword: this.f.password.value,
        newPassword: this.f.newPassword.value,
      })
      .subscribe(
        (res) => {
          this.changedPass = true;
        },
        (error) => {
          this.apiError = error.error.detail;
        }
      );
  }

  getInvoices() {
    this.settingsService.getInvoices().subscribe((res) => {
      this.invoices = res;
    });
  }

  getDate(date: string) {
    return moment(date).parseZone().format("L");
  }

  changeCard() {
    this.changingCard = true;
    this.scriptService.loadScript("stripe").then(() => {
      setTimeout(() => {
        if (this.stripeContainer.nativeElement.id === "stripeForm") {
          this.form = this.stripeContainer.nativeElement.querySelector("form");
        }
        this.resetButton = this.stripeContainer.nativeElement.querySelector(
          "a.reset"
        );
        this.stripe = Stripe(this.apiKey);

        this.elements = this.stripe.elements({
          locale: "en",
        });

        const elementStyles = {
          base: {
            color: "#000",
          },
          invalid: {
            color: "#fff",
            ":focus": {
              color: "#FA755A",
            },
            "::placeholder": {
              color: "#FFCCA5",
            },
          },
        };

        const elementClasses = {
          focus: "focus",
          empty: "empty",
          invalid: "invalid",
        };

        this.cardNumber = this.elements.create("cardNumber", {
          style: elementStyles,
          classes: elementClasses,
        });
        this.cardNumber.mount("#card-number");

        this.cardExpiry = this.elements.create("cardExpiry", {
          style: elementStyles,
          classes: elementClasses,
        });
        this.cardExpiry.mount("#card-expiry");

        this.cardCvc = this.elements.create("cardCvc", {
          style: elementStyles,
          classes: elementClasses,
        });
        this.cardCvc.mount("#card-cvc");

        this.cardNumber.on("change", (event: any) => {
          this.cardOnChange(event);
        });
      }, 0);
    });
  }

  cancel() {
    this.changingCard = false;
  }

  cardOnChange(event: any) {
    const savedErrors = {};
    // console.log('card.on change()');
    if (event.error) {
      // o error.classList.add('visible');
      this.errorvisible = true;
      // @ts-ignore
      savedErrors[0] = event.error.message;
      // o errorMessage.innerText = event.error.message;
      this.errorMessage = event.error.message;
      // console.log('displaying', this.error_message);
    } else {
      // @ts-ignore
      savedErrors[0] = null;

      // Loop over the saved errors and find the first one, if any.
      const nextError = Object.keys(savedErrors)
        .sort()
        .reduce((maybeFoundError, key) => {
          // @ts-ignore
          return maybeFoundError || savedErrors[key];
        }, null);

      if (nextError) {
        // Now that they've fixed the current error, show another one.
        // o errorMessage.innerText = nextError;
        // console.log('displaying', nextError);
        this.errorMessage = nextError;
      } else {
        // The user fixed the last error; no more errors.
        // o error.classList.remove('visible');
        this.errorvisible = false;
      }
    }
  }

  onReset(e: any) {
    // console.log('onReset(e)', e);

    e.preventDefault();

    // // Resetting the form (instead of setting the value to `''` for each input)
    // // helps us clear webkit autofill styles.
    this.form.reset();
    // console.log('this.elements', this.elements);

    // Clear each Element.
    this.cardNumber.clear();
    this.cardExpiry.clear();
    this.cardCvc.clear();

    // // Reset error state as well.
    // error.classList.remove('visible');
    this.errorvisible = false;

    this.stripeContainer.nativeElement.classList.remove("submitted");
  }

  onSubmitCard(e: any) {
    e.preventDefault();
    this.stripeContainer.nativeElement.classList.add("submitting");

    this.stripe
      .createPaymentMethod({
        type: "card",
        card: this.cardNumber,
      })
      .then((result: any) => {
        this.stripeContainer.nativeElement.classList.remove("submitting");

        if (result.paymentMethod.id) {
          this.subService
            .changePaymentMethod(result.paymentMethod.id)
            .subscribe((res) => {
              this.changingCard = false;
              this.cardChanged = true;
              setTimeout(() => {
                this.cardChanged = false;
              }, 5000);
            });
        } else {
          console.error(result);
        }
      });
  }

  cancelSubscription() {
    this.subService.cancelSubscription().subscribe((res) => {
      console.log(res);
    });
  }

  updateEmail() {
    this.settingsService.updateEmail(this.email).subscribe((res) => {
      console.log(res);
    });
  }
}
