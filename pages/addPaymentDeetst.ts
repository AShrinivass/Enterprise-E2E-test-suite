import {Page, Locator} from "@playwright/test";

export class AddPaymentDeets{

    readonly page: Page
    readonly addCardNumber: Locator
    readonly addName: Locator
    readonly addCvc: Locator
    readonly addExpirationMonth: Locator
    readonly addExpirationYear: Locator
    readonly confirmPayment: Locator
    readonly downloadInvoice: Locator
    readonly continueToHomepagePostCheckout: Locator

    constructor(page: Page){
        this.page=page
        this.addCardNumber = page.locator('[data-qa="card-number"]')
        this.addName = page.locator('[data-qa="name-on-card"]')
        this.addCvc = page.locator('[data-qa="cvc"]')
        this.addExpirationMonth = page.locator('[data-qa="expiry-month"]')
        this.addExpirationYear = page.locator('[data-qa="expiry-year"]')
        this.confirmPayment = page.getByRole('button', {name:'Pay and Confirm Order'})
        this.downloadInvoice = page.getByRole('link', {name: 'Download Invoice'})
        this.continueToHomepagePostCheckout = page.getByRole('link', {name:'Continue'})
    }

    async addPaymentinfo(name:string, cardnumber: string, cvc: string, month: string, year: string){
        await this.addName.fill(name)
        await this.addCardNumber.fill(cardnumber)
        await this.addCvc.fill(cvc) 
        await this.addExpirationMonth.fill(month)
        await this.addExpirationYear.fill(year)
        await this.confirmPayment.click()
    }
}