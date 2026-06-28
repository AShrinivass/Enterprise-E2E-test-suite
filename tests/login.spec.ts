import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe.skip('positive login scenarios', ()=>{
  test.beforeEach(async ({page}) => {
  await page.goto('https://automationexercise.com/login')
  await expect(page.locator('.login-form h2')).toContainText('Login to your account')
})
test('login successfully', async({page}) =>{
  const loginPage = new LoginPage(page)
  await loginPage.login('shrnvs_1782545464874@email.com','Welcome69')

  const loggedInUser = page.locator('.nav.navbar-nav li').filter({hasText: "Logged in as"})
  await expect(loggedInUser).toContainText('shrunuvas')
})})


test.describe('Negative login scenarios', () => {

    test('Wrong email', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.goto()

        await loginPage.login('wrong@test.com', 'Welcome1');

        await expect(loginPage.loginError).toBeVisible();
    });

    test('Wrong password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.login(
            'shrnvs@keymail.com',
            'WrongPassword'
        );

        await expect(loginPage.loginError).toBeVisible();
    });

});