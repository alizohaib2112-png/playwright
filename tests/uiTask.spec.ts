import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';
import { ProductsPage } from '../pages/products.page';
import { ProductDetailsPage } from '../pages/productDetails.page';
import { ProductAddedToCartModalPage } from '../modal/productAddedToCartModal.page';
import { ViewCartPage } from '../pages/viewCart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { PaymentPage } from '../pages/payment.page';

test('Buy a Shirt', async ({ page }) => {

  const loginPage = new LoginPage(page)
  const homePage = new HomePage(page)
  const productsPage = new ProductsPage(page)
  const productDetailsPage = new ProductDetailsPage(page)
  const productAddedToCartModal = new ProductAddedToCartModalPage(page)
  const viewCartPage = new ViewCartPage(page)
  const checkout = new CheckoutPage(page)
  const paymentPage = new PaymentPage(page)

  let cartProductName;

  //login
  await loginPage.login('alizohaib2112@gmail.com','Timeclock1!')

  await expect(homePage.logoutLink).toBeVisible()

  // Search Tshirt
  await homePage.productLink.click()

  await productsPage.searchProduct('TShirt')

  await productsPage.viewProduct(productsPage.greenShirt)

  // add to cart
  await productDetailsPage.addTocartButton.click()

  await productAddedToCartModal.continueShoppingButton.click()

  await homePage.cartLink.click()

  cartProductName = await viewCartPage.getCellText(1,2)

  expect(cartProductName).toContain('Men Tshirt')

  // checkout
  await viewCartPage.proceedToCheckoutButton.click()

  await checkout.placeOrderButton.click()
  
  await paymentPage.completePayment('Ali Zohaib','123456','453','12','2029')

  await expect(paymentPage.orderConfirmationLabel).toContainText('Order Placed!')
});

