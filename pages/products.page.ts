import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly searchIcon: Locator;
  readonly greenShirt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.locator('[id="search_product"]');
    this.searchIcon = page.locator('[id="submit_search"]');
    this.greenShirt = page.locator('[href="/product_details/2"]');
  }

  async searchProduct(prodcutName: string) {
    await this.searchInput.fill(prodcutName);
    await this.searchIcon.click
  }

  async viewProduct(prodcut: Locator) {
    await prodcut.click();
  }

}
