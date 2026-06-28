import { APIRequestContext, Request } from "@playwright/test";

export class ProdcutService{

    constructor(private request: APIRequestContext){}

    async getProducts(){
        return await this.request.get('https://automationexercise.com/api/productsList')
    }

    async searchProducts(searchTerm: string){
        return await this.request.post('https://automationexercise.com/api/searchProduct', {
            form:{
                search_product: searchTerm
            }
        })  

        
    }
}