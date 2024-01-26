import { type Page, type BrowserContext } from "@playwright/test";
import * as fs from 'fs';
import * as path from 'path';

export abstract class BasePage {
  protected page: Page;
  protected context: BrowserContext;
  public path: string;

  constructor(page: Page, context: BrowserContext, path: string) {
    this.page = page;
    this.context = context;
    this.path = path;
}

  async open() {
    await this.page.goto(this.path);
  }

  async openAs(name: string) {
    await this.open();
    await this.context.addCookies([{name: 'customer', 
    value: await this.getUserCookie(name),
    domain: 'automationteststore.com',
  path: '/'}]);
   await this.open();
  }

  async getUserCookie(name: string) {
    const jsonPath = path.join(__dirname, 'data/users.json');
  
    try {
      const jsonData = fs.readFileSync(jsonPath, 'utf-8');
      const users = JSON.parse(jsonData).users;
      const user = users.find(u => u.username === name);
  
      if (!user) {
        throw new Error(`User not found: ${name}`);
      }
  
      return user.cookie; // Assuming you want to return the cookie string
    } catch (error) {
      console.error('Error reading user data:', error);
      return undefined;
    }
  }
}