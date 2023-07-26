// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const { consultAccount, checkBalance, checkLimit, deposit, withdraw, adjustLimit, disableLimit } = require ('./contaBancaria')

describe('verify functions of account bank', () => {
    
    const account = {}

    beforeEach(() => {
        account.name = 'Mariana'
        account.balance = 500
        account.limit = 1200
    })

    it('should check consult of informations account bank', () => {
        consultAccount(account)
        expect(account.name).toEqual('Mariana')
        expect(account.balance).toEqual(500)
        expect(account.limit).toEqual(1200)
    })

    it('should check balance account', () => {
        checkBalance(account)
        expect(account.balance).toEqual(500)
    })

    it('should check limit account', () => {
        checkLimit(account)
        expect(account.limit).toEqual(1200)
    })

    it('should check deposit in account', () => {
        deposit(account, 250)
        expect(account.balance).toEqual(750)
    })

    it('should check withdraw in account when the client has balance', () => {
        withdraw(account, 50)
        expect(account.balance).toEqual(450)
    })

    it('should check withdraw in account when the client has not balance but has limit', () => {
        withdraw(account, 650)
        expect(account.balance).toEqual(-150)
    })

    it('should check withdraw in account when the client has not balance or limit', () => {
        const output = 'Saque não autorizado! Saldo e limites insuficientes'

        expect(withdraw(account, 3000)).toEqual(output)
    })

    it('should check if the adjust limit it is working', () => {
        adjustLimit(account, 1500)
        expect(account.limit).toEqual(1500)
    })
    
    it('should check if the disable limit it is working', () => {
        disableLimit(account)
        expect(account.limit).toEqual(0)
    })

})