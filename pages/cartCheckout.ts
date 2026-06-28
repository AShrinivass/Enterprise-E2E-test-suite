import { Locator, Page } from "@playwright/test";

export class CartCheckout{
    readonly page: Page
    readonly addComment: Locator
    readonly placeOrder: Locator
    
    constructor(page:Page){
        this.page = page
        this.addComment = page.locator('textarea[name = "message"]')
        this.placeOrder = page.getByRole('link', {name:'Place Order'})
    }

    async checkout(comment:string){
        await this.addComment.fill(comment)
        await this.placeOrder.click()
    }
}