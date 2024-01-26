import test, { expect } from '../page-objects/page.fixtures';

test.beforeEach(async ({ cartPage }) => {
  await cartPage.openAs('aguspe');
});

test('has title', async ({ cartPage }) => {
  expect(await cartPage.title()).toContain('Shopping Cart');
});