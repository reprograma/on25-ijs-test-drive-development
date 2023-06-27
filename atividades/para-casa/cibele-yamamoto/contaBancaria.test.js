// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta.
// É possível fazer operações de consulta de saldo, saque e depósito. 
// No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo 
// suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo
// do cliente ficará negativo após o saque.
// Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. 
// Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const {withdraw, checkBalance, deposit, modifyLimit} = jest.requireActual('./contaBancaria');
describe("Verify bank account operations", () => {

    beforeEach(() => {
        accountMock = {
            "name": "Roberto de Almeida",
            "balance": 5000,
            "limit": 3000
        }
    })

    it("Should validate withdraw if it has enough balance/limit", () => {
        expect(withdraw(accountMock, 6000)).toEqual(-1000)
    })

    it("Should validate withdraw if it does not have enough balance/limit", () => {
        expect(withdraw(accountMock, 10000)).toEqual("Operação não permitida. Sem saldo/limite suficiente.")
    })

    // Check Balance
    it("Should validate check balance", () => {
        expect(checkBalance(accountMock)).toEqual(5000)
    })

    // Deposit
    it("Should validate deposit", () => {
        expect(deposit(accountMock, 3000)).toEqual(8000)
    })

    // Change Limit
    it("Should increase limit with new value", () => {
        expect(modifyLimit(accountMock, 1000)).toEqual(4000)
    })

    it("Should decrease limit with new value", () => {

        expect(modifyLimit(accountMock, -1000)).toEqual(2000)
    })

    it("Should decrease limit until deactivating", () => {
        expect(modifyLimit(accountMock, -5000)).toEqual(0)
    })

})