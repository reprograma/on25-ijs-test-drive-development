// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.
const {
  createAccount,
  checkBalance,
  withdraw,
  deposit,
  addLimit,
  removeLimit,
  limitOff,
} = require("./contaBancaria");
describe("verify bank account", () => {
  let account;

  beforeEach(() => {
    account = createAccount("Marina", 150, 1000);
  });
  it("should check if there is a balance available in the account", () => {
    checkBalance(account);
    expect(account.balance).toEqual(150);
  });
  it("should check if it's possible to withdraw", () => {
    withdraw(account, 100);
    expect(account.balance).toEqual(50);
  });
  it("should check if it's possible to withdraw with limit", () => {
    withdraw(account, 200);
    expect(account.balance).toEqual(-50);
  });
  it("should check deposit", () => {
    deposit(account, 50);
    expect(account.balance).toEqual(200);
  });
  it("should check deposit with negative value", () => {
    deposit(account, -50);
    expect(account.balance).toEqual(150);
  });
  it("should check the increased limit value", () => {
    addLimit(account, 300);
    expect(account.limit).toEqual(1300);
  });
  it("should check the decreased limit value", () => {
    removeLimit(account, 10);
    expect(account.limit).toEqual(990);
  });
  it("should check the disable limit", () => {
    limitOff(account);
    expect(account.limit).toEqual(0);
  });
});
