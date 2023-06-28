// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const { BankAccount } = require('./contaBancaria');

describe('bank account balance exercise', () => {
    let account;

    beforeEach(() => {
        account = new BankAccount("Jessica", 0, 3000);
    });

    it("check change in balance", () => {
        account = new BankAccount("Jessica", 1000, 3000);
        const expectedBalance = 1000.00;
        const currentBalance = account.checkBalance();
        expect(currentBalance).toBe(expectedBalance);
    });

    it('deposit and withdraw from bank account', () => {
        account.deposit(1000);
        expect(account.checkBalance()).toBe(1000);
        account.withdraw(300);
        expect(account.checkBalance()).toBe(700);
    });

    it('adjust bank account limit', () => {
        account.adjustLimit(7000);
        expect(account.limit).toBe(7000);
    });
});