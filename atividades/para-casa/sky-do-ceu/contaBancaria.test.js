// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta.
// É possível fazer operações de consulta de saldo, saque e depósito.
// No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque.
// Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.
// Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const { checkBalance, withdrawValue, depositValue, changeLimit } = require('./contaBancaria')

describe("Acc check balance", () => {
    it('Check acc exists', () => {
        const name = 'Sky'
        const output = 1000
        expect(checkBalance(name)).toEqual(output)
    })
    it('Check acc DONT exists', () => {
        const name = 'Skyy'
        const output = 'Account does not exists'
        expect(checkBalance(name)).toEqual(output)
    })
})

describe('Acc withdraw test', () => {
    it('acc DONT exists', () => {
        const name = 'Skyyy'
        const value = 100
        const output = 'Account does not exists'
        expect(withdrawValue(name, value)).toEqual(output)
    })
    it('Try to withdraw less than balance+limit', () => {
        const name = 'Sky'
        const withdraw = 1500
        const output = `Withdrew ${withdraw}, current balance: -500`
        expect(withdrawValue(name, withdraw)).toBe(output)
    })
    it('Try to withdraw equal to balance+limit', () => {
        const name = 'Sky'
        const withdraw = 500
        const output = `Withdrew ${withdraw}, current balance: -1000`
        expect(withdrawValue(name, withdraw)).toBe(output)
    })
    it('Try to withdraw more than balance+limit', () => {
        const name = 'Sky'
        const withdraw = 1
        const output = 'Cannot withdraw value'
        expect(withdrawValue(name, withdraw)).toBe(output)
    })
})

describe('Acc deposit test', () => {
    it('acc DONT exists', () => {
        const name = 'Skyyy'
        const value = 1000
        const output = 'Account does not exists'
        expect(depositValue(name, value)).toEqual(output)
    })
    it('Check acc balance BEFORE deposit', () => {
        const name = 'Sky'
        const output = -1000
        expect(checkBalance(name)).toEqual(output)
    })
    it('Deposit 1000', () => {
        const name = 'Sky'
        const value = 1000
        const output = `Deposited ${value}, current balance: 0`
        expect(depositValue(name, value)).toBe(output)
    })
    it('Deposit 100', () => {
        const name = 'Sky'
        const value = 100
        const output = `Deposited ${value}, current balance: 100`
        expect(depositValue(name, value)).toBe(output)
    })
})

describe('Change limit to over withdraw', () => {
    it('acc DONT exists', () => {
        const name = 'Skyyy'
        const value = 1000
        const output = 'Account does not exists'
        expect(changeLimit(name, value)).toEqual(output)
    })
    it('Change to 100', () => {
        const name = 'Sky'
        const value = 100
        const output = `New limit set to: ${value}`
        expect(changeLimit(name, value)).toBe(output)
    })
})