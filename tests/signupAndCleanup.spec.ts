import {test, expect} from "@playwright/test";
import { SignupPage } from "../pages/signupPage";
import { LoginPage } from "../pages/loginPage";

test('new signup', async({page}) => {

    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.signup(`shrunuvas`, `shrnvs_${Date.now()}@email.com`)

    const registerUser = new SignupPage(page)
    await registerUser.registerNewUser({password: 'Welcome69',
        firstName: 'Shrinivas',
        lastName: 'A',
        address: '221, 4th main, Banashankari',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        zipCode: '560001',
        mobile: '9876543210'})
    await expect(page.getByText('ACCOUNT CREATED')).toBeVisible()
    await page.getByRole('link', {name: 'Continue'}).click();
    await registerUser.userDelete()
    await expect(page.locator('[data-qa="account-deleted"]')).toHaveText('Account Deleted!')
})