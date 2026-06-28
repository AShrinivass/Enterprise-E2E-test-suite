import { APIRequestContext, Request } from "@playwright/test";

export class AccountServices{
    constructor(private request: APIRequestContext){}

    async createAccount(formData:any){
            return await this.request.post('https://automationexercise.com/api/createAccount', 
                {form:formData }
            )
    }

    async deleteAccount(formData: any){
        return await this.request.delete('https://automationexercise.com/api/deleteAccount', {form:formData})

    }
}