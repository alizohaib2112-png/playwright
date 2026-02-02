import { Page, Locator } from '@playwright/test';

export class ProductAddedToCartModalPage {
  readonly page: Page;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueShoppingButton = page.getByText('Continue Shopping');

  }

}
