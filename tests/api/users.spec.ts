import {test, expect} from "@playwright/test";
import { AccountServices } from "../../api-services/accountService";
import { createAccountPayload } from "../../test-data/userdata";
import { deleteAccountPayload } from "../../test-data/userdata";

test.describe('user operations, create and delete', () => {

    test('create account', async({request}) => {
        const accountServices = new AccountServices(request)

        const response = await accountServices.createAccount(createAccountPayload)
        expect(response.status()).toBe(200)
        const responseBody = await response.json()
        expect(responseBody.responseCode).toBe(201)

        const delResponse = await accountServices.deleteAccount(deleteAccountPayload)
        expect(delResponse.status()).toBe(200)
        const delResponseBody = await delResponse.json()  
        expect(delResponseBody.responseCode).toBe(200)
    })
})