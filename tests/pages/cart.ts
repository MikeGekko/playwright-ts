import BasePage from '@pages/base';
import { Locator, Page } from '@playwright/test';

export default class CartPage extends BasePage {
  public backpack_item: Locator;
  readonly cart: Locator;
  readonly add_to_card: Locator;
  readonly checkout_button: Locator;
  readonly first_name_checkout_info: Locator;
  readonly last_name_checkout_info: Locator;
  readonly zip_code_checkout_info: Locator;
  readonly continue_button: Locator;
  readonly finish_button: Locator;
  readonly complete_container: Locator;

  constructor(page: Page) {
    super(page);
    this.cart = this.page.locator('[class="shopping_cart_link"]');
    this.add_to_card = this.page.locator('button[data-test*="add-to-cart"]');
    this.checkout_button = this.page.locator('[id="checkout"]');
    this.first_name_checkout_info = this.page.locator('[name="firstName"]');
    this.last_name_checkout_info = this.page.locator('[name="lastName"]');
    this.zip_code_checkout_info = this.page.locator('[name="postalCode"]');
    this.continue_button = this.page.locator('[name="continue"]');
    this.finish_button = this.page.locator('[id="finish"]');
    this.complete_container = this.page.locator('[id="checkout_complete_container"]');
  }

  async openCart() {
    await this.cart.click();
  }

  async checkoutItem(firstName: string, lastName: string, zipCode: string) {
    await this.checkout_button.click();
    await this.first_name_checkout_info.fill(firstName);
    await this.last_name_checkout_info.fill(lastName);
    await this.zip_code_checkout_info.fill(zipCode);
    await this.continue_button.click();
    await this.finish_button.click();
  }
}
