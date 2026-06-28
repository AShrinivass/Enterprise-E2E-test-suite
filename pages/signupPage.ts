import { Locator, Page } from "@playwright/test";

type User = {
    password: string;
    firstName: string;
    lastName: string;
    address: string;
    country: string;
    state: string;
    city: string;
    zipCode: string;
    mobile: string;
};

export class SignupPage {

    readonly page: Page;

    readonly password: Locator;
    readonly firstName: Locator;
    readonly lastname: Locator;
    readonly addressInput: Locator;
    readonly countryDrop: Locator;
    readonly state: Locator;
    readonly city: Locator;
    readonly zipCode: Locator;
    readonly phNo: Locator;
    readonly createAccountBtn: Locator;
    readonly continueToHomeBtn: Locator
    readonly deleteUser: Locator

    constructor(page: Page) {

        this.page = page;

        this.password = page.getByLabel('Password');
        this.firstName = page.getByLabel('First name');
        this.lastname = page.getByLabel('Last name');
        this.addressInput = page.getByLabel('Address').first();
        this.countryDrop = page.getByLabel('Country');
        this.state = page.getByLabel('State');
        this.city = page.getByLabel('City');
        this.zipCode = page.locator('#zipcode');
        this.phNo = page.getByLabel('Mobile Number');
        this.createAccountBtn = page.getByRole('button', {
            name: 'Create Account'
        })
        this.continueToHomeBtn = page.getByRole('link', {name: 'Continue'})
        this.deleteUser = page.getByRole('link', {name: 'Delete Account'})
    }
    async goto(){
        await this.page.goto('https://automationexercise.com/login')
    }
    async registerNewUser(user:{
        password: string;
        firstName: string;
        lastName: string;
        address: string;
        country: string;
        state: string;
        city: string;
        zipCode: string;
        mobile: string;
    }){
        await this.password.fill(user.password)
        await this.firstName.fill(user.firstName)
        await this.lastname.fill(user.lastName)
         await this.addressInput.fill(user.address);
        await this.countryDrop.selectOption(user.country);
        await this.state.fill(user.state);
        await this.city.fill(user.city);
        await this.zipCode.fill(user.zipCode);
        await this.phNo.fill(user.mobile);
        await this.createAccountBtn.click();

    }
    async userDelete(){
        await this.deleteUser.click()
    }
}