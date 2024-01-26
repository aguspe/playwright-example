import test, { expect } from '../page-objects/page.fixtures';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.open();
});

test('has title', async ({ loginPage }) => {
  expect(await loginPage.title()).toContain('Login');
});

test('can login', async ({ loginPage }) => {
  await loginPage.login('aguspe', '12341234');
  expect(await loginPage.title()).toContain('My Account');
});