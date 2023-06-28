/* Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta.
É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada,
caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, 
nesses casos o saldo do cliente ficará negativo após o saque.
Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. 
 Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

*/
const {newAccount, checkBalance, increaseLimit, disableLimit, decreaseLimit, deposit, withdraw} = require('./contaBancaria')

describe("Check bank account operations", () => {

    let account;
    
    beforeEach(() => {
      account = newAccount("Erica", 500, 1500);
    });
    it("should check the account balance", () => {
        checkBalance(account)
        expect(account.balance).toEqual(500)
    })

    it("should check if the withdraw works", () => {
        withdraw(account, 300)
        expect(account.balance).toEqual(200)
    })
    it("should check if the withdraw works when there's not enough limit", () => {
        withdraw(account, 1000)
        expect(account.balance).toEqual(-500)
    })
    it("should increase the limit", () => {
        increaseLimit(account, 1000)
        expect(account.limit).toEqual(2500)
    })
    it("should decrease the limit", () => {
        decreaseLimit(account, 1000)
        expect(account.limit).toEqual(500)
    })
    it("should disable the limit", () => {
        disableLimit(account, 0)
        expect(account.limit).toEqual(0)
    })
    it("should make a deposit into the account", () => {
        deposit(account, 1000)
        expect(account.balance).toEqual(1500)
    })
})

