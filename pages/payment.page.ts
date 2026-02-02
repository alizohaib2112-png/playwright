import { Page, Locator } from '@playwright/test';

export class PaymentPage {
  readonly page: Page;
  readonly NameOnCardInput: Locator;
  readonly cardNumberInput: Locator;
  readonly cvcInput: Locator;
  readonly expirationMonthInput: Locator;
  readonly expirationYearInput: Locator;
  readonly placeAndConfirmOrderButton: Locator;
  readonly orderConfirmationLabel: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.NameOnCardInput = page.locator('[data-qa="name-on-card"]');
    this.cardNumberInput = page.locator('[data-qa="card-number"]');
    this.cvcInput = page.locator('[data-qa="cvc"]');
    this.expirationMonthInput = page.locator('[data-qa="expiry-month"]');
    this.expirationYearInput = page.locator('[data-qa="expiry-year"]');
    this.placeAndConfirmOrderButton = page.locator('[data-qa="pay-button"]');
    this.orderConfirmationLabel = page.locator('[data-qa="order-placed"]')
  }

  async completePayment(nameOnCard: string, cardNumber: string,cvc: string, expiryMonth: string,expiryYear: string) {
    await this.NameOnCardInput.fill(nameOnCard);
    await this.cardNumberInput.fill(cardNumber);
    await this.cvcInput.fill(cvc);
    await this.expirationMonthInput.fill(expiryMonth);
    await this.expirationYearInput.fill(expiryYear);
    await this.placeAndConfirmOrderButton.click()
  }

}
