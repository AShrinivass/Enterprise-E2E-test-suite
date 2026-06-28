import {request, test, expect} from '@playwright/test'
import { ProdcutService } from '../../api-services/productService'


test.describe('Products api testing', () =>{

    test('get all products', async({request}) => {
            

        const prodcutServices = new ProdcutService(request)
        const response = await prodcutServices.getProducts()

        expect(response.status()).toBe(200)

        const responseBody = await response.json()

        expect(responseBody.responseCode).toBe(200)

        for(const product of responseBody.products){
            expect(product).toHaveProperty('id')
            expect(product).toHaveProperty('name')
            expect(product).toHaveProperty('price')
            expect(product).toHaveProperty('brand')
            expect(product).toHaveProperty('category')
            expect(product.category).toHaveProperty('category')
            expect(product.category).toHaveProperty('usertype')
            expect(product.category.usertype).toHaveProperty('usertype')
        }
    })

    test('search for products', async({request}) => {
        const prodcutServices = new ProdcutService(request)
        const response = await prodcutServices.searchProducts('Tshirt')
        expect(response.status()).toBe(200)
        const responseBody = await response.json()
        expect(responseBody.responseCode).toBe(200)

        for (const product of responseBody.products){
            const productName = product.name.toLowerCase().replace(/[\s-]/g, '')
            expect(productName).toContain('tshirt')
        }

        
    })
})