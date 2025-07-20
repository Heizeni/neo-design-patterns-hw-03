# neo-design-patterns-hw-03

## Опис

Цей проєкт демонструє реалізацію імітаційної архітектури платіжної системи, яка підтримує кілька провайдерів: **Stripe**, **PayPal** та **ApplePay**. Кожен платіжний провайдер реалізує однакову функціональність:

- `authorize(amount)`
- `capture(transactionId)`
- `refund(transactionId)`

Для забезпечення гнучкості архітектури, застосовано патерни **Factory Method** та **Abstract Factory**.

## Структура проєкту

neo-design-patterns-hw-03/
├── src/
│ ├── app/
│ │ └── PaymentContext.ts
│ ├── core/
│ │ ├── PaymentProvider.ts
│ │ └── PaymentProviderFactory.ts
│ ├── providers/
│ │ ├── stripe/
│ │ │ ├── StripeFactory.ts
│ │ │ └── StripePaymentProvider.ts
│ │ ├── paypal/
│ │ │ ├── PaypalFactory.ts
│ │ │ └── PaypalPaymentProvider.ts
│ │ └── apple/
│ │ ├── AppleFactory.ts
│ │ └── ApplePaymentProvider.ts
│ └── main.ts
├── package.json
├── tsconfig.json
└── .gitignore


## 🧩 Використані патерни

- **Factory Method** — для створення конкретного платіжного сервісу (`createPaymentProvider()`).
- **Abstract Factory** — для відокремлення створення об'єктів від їх використання (`PaymentProviderFactory` як абстракція фабрики).


## 🚀 Інструкція запуску

1. Встанови залежності:
   ```bash
   npm install
