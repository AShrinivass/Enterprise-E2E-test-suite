import {test, expect} from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { CartPage } from "../pages/cartPage";
import { CartCheckout } from "../pages/cartCheckout";
import { AddPaymentDeets } from "../pages/addPaymentDeetst";

test.use({storageState: 'playwright/.auth/user.json'})

test('e2e checkout', async({page}) => {
    
    const selectProdcut = new HomePage(page)
    await selectProdcut.goto()
    await page.goto('https://automationexercise.com/view_cart');

    const deleteButtons = page.locator('.cart_quantity_delete')

    while(await deleteButtons.count() > 0){
        await deleteButtons.first().click()
        await page.waitForTimeout(500)
    }

    await selectProdcut.goto()

    await selectProdcut.addProduct()
    await expect(page.getByText('Added!')).toBeVisible()
    await page.getByRole('link', {name: 'View Cart'}).click()
    await expect(page.getByRole('link', {name: 'Blue Top'})).toBeVisible()
    await expect(page.locator('.cart_quantity button')).toBeVisible()
    

    await expect(page.locator('.cart_total_price')).toHaveText('Rs. 500')

    const checkoutProceed = new CartPage(page)
    await checkoutProceed.cartFlow()

    const checkoutCart = new CartCheckout(page)
    await checkoutCart.checkout('This is a test comment')

    const paymentProcess = new AddPaymentDeets(page)
    await paymentProcess.addPaymentinfo('Shrinivas', '123456789012', '808', '06', '2026')
    await expect(page.locator('.title.text-center')).toHaveText('Order Placed!')    
    await selectProdcut.goto()
    await expect(page.getByAltText('Website for automation practice')).toBeVisible()
})    