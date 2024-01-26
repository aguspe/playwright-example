// test/fixtures.ts
import { test as baseTest, BrowserContext } from '@playwright/test';
import { LoginPage } from './pages/login.page';
import { CartPage } from './pages/cart.page';

type TestFixtures = {
    context: BrowserContext;
    loginPage: LoginPage;
    cartPage: CartPage;
};

const test = baseTest.extend<TestFixtures>({
    context: async ({ browser }, use) => {
        const context = await browser.newContext();
        await use(context);
    },
    loginPage: async ({ context }, use) => {
        const loginPage = new LoginPage(await context.newPage(), context, '/index.php?rt=account/login');
        await use(loginPage);
    },
    cartPage: async ({ context }, use) => {
        const cartPage = new CartPage(await context.newPage(), context, '/index.php?rt=checkout/cart');
        await use(cartPage);
    },
});

export const expect = test.expect;
export default test;
