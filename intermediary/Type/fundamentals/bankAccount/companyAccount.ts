import { DioAcount } from "./bankAccount";

export class CompanyAccount extends DioAcount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    getLoan = ():void => {
        console.log("Voce pegou um emprestimo ")
    }

    deposit = ():number => {
        return 2;
    }
}