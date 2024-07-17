import { DioAcount } from "./bankAccount";

export class PeopleAccount extends DioAcount{
    doc_id : number 

    constructor(doc_id : number, name : string, accountNumber : number){
        super(name, accountNumber)
        this.doc_id = doc_id
    }
}



export class CompanyAccount extends DioAcount{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = () => {
        console.log('Voce pegou um emprestimo')
    }
}




