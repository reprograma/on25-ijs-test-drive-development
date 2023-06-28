// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const {  checkBalance, accountWithdrawal, accountDeposit, accountLimit } = require ("./contaBancaria");

describe("check client account", () => {
    it('Check if customer has exists account', () => {   
        const numberAccount = 4572       
        const boolAccount = true
        const output = "Customer does not exist!"       
        
        expect(checkClient(numberAccount)).toEqual(output)
        //expect(checkClient(name)).toEqual(output)
        expect(checkClient(boolAccount)).toEqual(output)
    })    

    it('Check client if the account has balance', () => {       
        const account = {"nameClient": "Ciane", "balance": 2000, "limit": 10000}
        const output = `Your balance is: R$ 2000,00`

        expect(checkBalance(account)).toEqual(output)        
    })   
})

describe("Account withdraw", () => {
    it('Check if withdrawal value <= balance',() => {
        const account = {"nameClient": "Ciane", "balance": 4000, "limit": 6000} 
        const value = 2500
        const output = `Withdrawal made. Your balance is: R$ 1500,00`

        expect(accountWithdrawal(account, value)).toEqual(output) 
    })
    
    it('Check withdrawal when balance < value <= limit', () => {
        const account = {"nameClient": "Ciane", "balance": 1000, "limit": 2000} 
        const value = 1500
        const output =` Withdrawal made. Your balance is: R$ -500,00`

        expect(accountWithdrawal(account, value)).toEqual(output)
    })

    it('Check when balance + limit < value', () => {
        const account = {"nameClient": "Ciane", "balance": 500, "limit": 1000} 
        const value = 1800
        const output = `Value is above the available account. Your balance is: R$ 500,00`

        expect(accountWithdrawal(account, value)).toEqual(output)
    })
})

describe("Account deposit", () => {
    it('Check deposit account and balance', () => {
        const account = {"nameClient": "Ciane", "balance": 400, "limit": 1500} 
        const depositValue = 500
        const output = `Deposit made successfully. Your balance is: R$ 900,00`

        expect(accountDeposit(account, depositValue)).toEqual(output)
    })
})

describe("Account limit", () => {
    it('Increase or descrease account limit', () => {
        const account = {"nameClient": "Ciane", "balance": 300, "limit": 2000} 
        const increaseLimit = 3500
        const descreaseLimit = 2500        

        expect(accountLimit(account, increaseLimit)).toEqual('Your limit is: R$ 3500,00')
        expect(accountLimit(account, descreaseLimit)).toEqual('Your limit is: R$ 2500,00')
    })

    it('Change limit is disabled', () => {
        const account = {"nameClient": "Ciane", "balance": 500, "limit": 2500} 
        const limitAtual = 3000
        const limitSituation = 'disabled' 

        expect(accountLimit(account, limitAtual, limitSituation)).toEqual('Your limit change is: Disabled')
    })
    
})