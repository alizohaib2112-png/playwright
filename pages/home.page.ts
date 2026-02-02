import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly logoutLink: Locator;
  readonly productLink: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutLink = page.locator('[href="/logout"]');
    this.productLink = page.locator('[href="/products"]');
    this.cartLink = page.locator('li>[href="/view_cart"]');
  }

}
