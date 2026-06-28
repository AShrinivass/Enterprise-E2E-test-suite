import { Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page
    //login
    readonly loginEmail: Locator
    readonly loginPass : Locator
    readonly submitBtn: Locator
    readonly loginError: Locator
    //signup
    readonly signupEmail: Locator
    readonly signupName: Locator
    readonly signupBtn: Locator

    constructor(page: Page){
        this.page = page;   

        //login page
        this.loginEmail = page.locator('.login-form').getByPlaceholder('Email Address')
        this.loginPass = page.locator('.login-form').getByPlaceholder('Password')
        this.submitBtn = page.getByRole('button', {name: 'Login'})
        this.loginError = page.getByText("Your email or password is incorrect!")

        //signup page
        this.signupName = page.getByPlaceholder('Name')
        this.signupEmail = page.locator('.signup-form').getByPlaceholder('Email Address')
        this.signupBtn = page.getByRole('button', {name:"Signup"})

    }

    async goto(){
        await this.page.goto('https://automationexercise.com/login')
    }

    //login function
    async login(email:string, password:string){
        await this.loginEmail.fill(email)
        await this.loginPass.fill(password)
        await this.submitBtn.click()
    }

    //signup function
    async signup(name:string, email:string){
        await this.signupName.fill(name)
        await this.signupEmail.fill(email)
        await this.signupBtn.click()
    }




}