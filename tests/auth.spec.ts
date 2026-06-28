import { expect, test as setup } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async({page}) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.login('shrnvs_1782545464874@email.com','Welcome69')
    const loggedInUser = page.locator('.nav.navbar-nav li').filter({hasText: "Logged in as"})
    await expect(loggedInUser).toContainText('shrunuvas')

    await page.context().storageState({path: authFile})

})