export abstract class DioAcount {
    name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    setName = (name: string) => {
        this.name = name
        console.log("Nome alterado com sucesso")
    }

    getName = (name: string) => {
        return this.name
    }

    deposit = (value: number) => {
        if (this.validateStatus()) {
            if (value === 0) {
                throw new Error('Nao e possivel realizar o deposito R$0.00')
            }
            console.log("Voce depositou", value)
            console.log("seu saldo agora e de ", value += this.balance)
        }
    }

    withdraw = (value: number) => {
        if (this.validateStatus()) {
            if (value < this.balance) {
                console.log("Voce sacou", value)
            }
            throw new Error('Voce nao possui esse valor disponivel em sua conta')
        }
    }

    getBalance = (): void => {
        console.log(this.balance)
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }

        throw new Error('Conta invalida')
    }

}




