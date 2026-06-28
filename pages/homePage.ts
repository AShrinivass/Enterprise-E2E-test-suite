import { Locator, Page } from "@playwright/test";

export class HomePage{

    readonly page: Page
    // readonly navCart: Locator
    readonly addProductToCart: Locator
    readonly continueShopping: Locator
    readonly goToCart: Locator
    readonly navCart: Locator
    readonly navbar: Locator
    readonly deleteBtn: Locator

    constructor(page: Page){
        this.page = page
        this.navCart = page.locator('.nav.navbar-nav li').getByRole('link', {name: 'cart'})
        this.addProductToCart = page.locator('.single-products')
                            .filter({ hasText: 'Blue Top' })
                            .locator('.add-to-cart')
                            .first();
        this.continueShopping = page.getByRole('button', {name: 'Continue Shopping'}) 
        this.goToCart = page.getByRole('link', {name: 'View Cart'})
        this.navbar = page.locator('.nav.navbar-nav')
        this.deleteBtn = page.getByRole('link', {name: 'Delete Account'})
    }

    async goto(){
        await this.page.goto('https://automationexercise.com', {waitUntil: 'domcontentloaded'})
    }

    async addProduct(){
        await this.addProductToCart.click()
    }

    async navigateTo(linkname:string){
        await this.navbar.getByRole('link', {name:linkname}).click()
    }
}

