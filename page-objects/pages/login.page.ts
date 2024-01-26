import { BasePage } from "../base.page";

export class LoginPage extends BasePage {
  async title() {
    return await this.page.title();
  }

  async login(username: string, password: string) {
    await this.page.fill('#loginFrm_loginname', username);
    await this.page.fill('#loginFrm_password', password);
    await this.page.locator('button', { hasText: 'Login' } ).click();
  }
}