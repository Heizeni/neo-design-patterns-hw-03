import { PaymentContext } from "./app/PaymentContext";
import { StripeFactory } from "./providers/stripe/StripeFactory";
import { PaypalFactory } from "./providers/paypal/PaypalFactory";
import { AppleFactory } from "./providers/apple/AppleFactory";

const provider = process.argv[2];
let factory;

switch (provider) {
  case "stripe":
    factory = new StripeFactory();
    break;
  case "paypal":
    factory = new PaypalFactory();
    break;
  case "apple":
    factory = new AppleFactory();
    break;
  default:
    console.error("Unknown provider:", provider);
    process.exit(1);
}

const context = new PaymentContext(factory);
context.processPayment(100);
