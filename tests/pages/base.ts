import { Page } from '@playwright/test';

export default class BasePage {
  public page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string, ...args) {
    await this.page.goto(`/${path}`);
  }
}
