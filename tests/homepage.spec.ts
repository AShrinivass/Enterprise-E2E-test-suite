import { test, expect } from "@playwright/test"
import { HomePage } from "../pages/homePage"
import { navLink } from "../test-data/navlinks"


test('Check all nav links', async({page}) => {
    const homePage = new HomePage(page)

    for (const link of navLink){
        await homePage.goto()
        await homePage.navigateTo(link.name)
        await expect(page).toHaveURL(new RegExp(link.url))
    }
})