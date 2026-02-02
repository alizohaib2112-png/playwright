import { Page, Locator } from '@playwright/test';

export class ViewCartPage {
  readonly page: Page;
  readonly cartListTable: Locator;
  readonly proceedToCheckoutButton: Locator; 

  constructor(page: Page) {
    this.page = page;
    this.cartListTable = page.locator('table tbody');
    this.proceedToCheckoutButton = page.getByText('Proceed To Checkout');
  }

  async getCellText(rowNumber: number, colNumber: number): Promise<string> {
    const row = this.page.locator(`table tbody tr`).nth(rowNumber-1);
    const cell = row.locator('td').nth(colNumber-1);
    return await cell.innerText();
  }

}
