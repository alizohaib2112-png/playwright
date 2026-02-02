import { Page, Locator } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;
  readonly addTocartButton: Locator;  

  constructor(page: Page) {
    this.page = page;
    this.addTocartButton = page.locator('[class~="cart"]')
  }

}
