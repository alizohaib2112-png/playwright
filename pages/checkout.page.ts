import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.placeOrderButton = page.getByText('Place Order');

  }

}
