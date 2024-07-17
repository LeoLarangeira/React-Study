import { CompanyAccount } from "./companyAccount";
import { DioAcount } from "./bankAccount";
import { PeopleAccount } from "./PeopleAccount";

const peopleAccount : PeopleAccount = new PeopleAccount(1, 'Leo', 200)
console.log(peopleAccount.deposit(100))

const companyAccount : CompanyAccount = new CompanyAccount('DIO', 200)
console.log(companyAccount)