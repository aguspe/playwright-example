import { BasePage } from "../base.page";

export class CartPage extends BasePage {
  async title() {
    return await this.page.title();
  }
}