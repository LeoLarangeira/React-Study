//Dio Banking 

//name, accountNumber 
//depositar, sacar

class Account{
    name : string
    accountNumber : number

    constructor(name : string, accountNumber : number){
        this.name = name
        this.accountNumber = accountNumber
    }

    deposit = () => {
        console.log('Voce depositou')
    
    }
    withdraw = () => {
        console.log('Voce depositou')
    }
}

const account1 = new Account('Leo', 200)

console.log(account1.name)
console.log(account1.withdraw)