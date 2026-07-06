import { faker } from "@faker-js/faker";
import { CustomerInfo } from "./customerInfo.type";


export function createFakeCustomerData(): CustomerInfo {
    return{
        title: 'Mr. ',
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        emailAddress: faker.internet.email(),
        password: 'Test@1234',
        date: '12',
        month: '11',
        year: '1997'
    }
}