import BasePage from '@pages/base';
import { Locator, Page } from '@playwright/test';

export default class InventoryPage extends BasePage {
  public backpack_item: Locator;
  readonly burger_menu: Locator;
  readonly add_to_card: Locator;

  constructor(page: Page) {
    super(page);
    this.burger_menu = this.page.locator('[id="react-burger-menu-btn"]');
    this.add_to_card = this.page.locator('button[data-test*="add-to-cart"]');
  }

  set set_backpack_item(product: string) {
    this.backpack_item = this.page.locator(`[class='inventory_item_name']`, { hasText: product });
  }

  async openItem(backpack_item: string) {
    this.set_backpack_item = backpack_item;
    await this.backpack_item.click();
  }

  async addToCard() {
    await this.add_to_card.click();
  }

  async goto(path = '/inventory.html') {
    await super.goto(path);
  }
}
