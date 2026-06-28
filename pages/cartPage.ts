import { Locator, Page } from "@playwright/test";

export class CartPage{
    readonly page: Page
    readonly proceedToCheckout: Locator
    readonly registerOrLogin: Locator
    readonly cartQuantityDelete: Locator
    readonly subscriptionForm: Locator
    readonly confirmSubscription: Locator

    constructor(page: Page){
        this.page = page
        this.proceedToCheckout = page.locator('.check_out')
        this.registerOrLogin = page.getByRole('link', {name: 'Register / Login'})
        this.cartQuantityDelete = page.locator('.cart_quantity_delete')
        this.subscriptionForm = page.getByPlaceholder('Your email address')
        this.confirmSubscription = page.locator('#subscribe')
    }

    async cartFlow(){
        await this.proceedToCheckout.click()
    }
}
