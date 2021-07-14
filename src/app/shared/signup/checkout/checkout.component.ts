import {
  Component,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef,
  DoCheck,
} from "@angular/core";
// import { ToastService } from "../../../component/toast/toast.service";
import { ScriptService } from "../../../_services";

@Component({
  selector: "app-checkout",
  templateUrl: "checkout.component.html",
  styleUrls: ["checkout.component.scss"],
})
export class CheckoutComponent implements AfterViewInit, DoCheck {
  @Input() item = "";
  @Input() userData: any;
  @Output() newItemEvent = new EventEmitter<boolean>();
  monthly = false;
  annually = true;
  interests = false;
  checkout = true;
  howDidYouHearFromUs = "";
  discountCode = "";

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
  paymentRequestAvailable = false;
  isExpert = "2";
  expert = localStorage.getItem("expert");
  constructor(
    // public toastService: ToastService,
    private scriptService: ScriptService
  ) {
    if (localStorage.getItem("expert") === "true") {
      this.isExpert = "3";
    }

    console.log(this.item);
  }

  changePeriod(period: string) {
    if (period === "monthly") {
      this.monthly = true;
      this.annually = false;
    } else {
      this.annually = true;
      this.monthly = false;
    }
  }

  nextStep() {
    if (this.item === "curious") {
      this.userData.howDidYouHearFromUs = this.howDidYouHearFromUs;
    }
    this.userData.discountCode = this.discountCode;
    this.interests = true;
    this.checkout = false;
  }

  addNewItem(value: boolean) {
    this.newItemEvent.emit(value);
  }

  ngAfterViewInit() {
    this.scriptService.loadScript("stripe").then(() => {
      this.form = this.stripeContainer.nativeElement.querySelector("form");
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

      const paymentRequest = this.stripe.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          amount: 2500,
          label: "Total",
        },
        requestShipping: true,
        shippingOptions: [
          {
            id: "free-shipping",
            label: "Free shipping",
            detail: "Arrives in 5 to 7 days",
            amount: 0,
          },
        ],
      });

      this.cardNumber.on("change", (event: any) => {
        this.cardOnChange(event);
      });
    });
  }

  ngDoCheck() {
    this.userData.paymentCycle = this.annually ? "YEARLY" : "MONTHLY";
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

  onSubmit(e: any) {
    e.preventDefault();
    if (this.item === "curious") {
      this.nextStep();
    } else {
      this.stripeContainer.nativeElement.classList.add("submitting");

      this.stripe
        .createPaymentMethod({
          type: "card",
          card: this.cardNumber,
        })
        .then((result: any) => {
          this.stripeContainer.nativeElement.classList.remove("submitting");

          if (result.paymentMethod.id) {
            this.userData.paymentMethodId = result.paymentMethod.id;
            this.nextStep();
            if (this.expert === "true") {
              localStorage.setItem("lastStepExpert", "true");
            }
          } else {
            console.error(result);
          }
        });
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
}
