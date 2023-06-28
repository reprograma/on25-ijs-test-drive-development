//Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta.

//É possível fazer operações de consulta de saldo, saque e depósito.

/*No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para
a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque.*/

//Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.
//Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

/*const {
  bankAccount,
  //accountWithdrawal,
  //depositInTheAccount,
  //limitChange,
} = require("./contaBancaria");

describe("When to query account details", () => {
  it("should check if there is a balance for withdrawal ", () => {
    const withdrawal = 100;
    const result = 500 - withdrawal;

    expect(bankAccount(withdrawal)).toBe("Saque feito", +result);
  });
});*/

const bankAccount = require("./contaBancaria");

let account = new bankAccount("Bruna", 2000, 2000);

describe("When to query account details", () => {
  it("should consult the account balance", () => {
    expect(account.balance).toEqual(2000);
  });
  it("should consult the account limit", () => {
    expect(account.limit).toEqual(2000);
  });
  it("should check if limit is disabled", () => {
    account.statusLimit(false);
    expect(account.status).toEqual(false);
  });
  it("should check if limit is enabled", () => {
    account.statusLimit(true);
    expect(account.status).toEqual(true);
  });
  it("should consult the new limit of the account", () => {
    account.newLimit(5000);
    expect(account.limit).toEqual(5000);
  });
  it("should refer to new account limit after withdrawal with activated limit", () => {
    account.statusLimit(true);
    account.withdrawValue(2500);
    expect(account.balance).toEqual(-500);
  });
  it("should consult balance after withdrawing with deactivated limit", () => {
    account.statusLimit(false);
    expect(account.balance).toEqual(-500);
    expect(account.withdrawValue(500)).toEqual(
      "Insufficient balance or disabled limit"
    );
  });
  it("should confirm the deposit", () => {
    account.putValue(2500);
    expect(account.balance).toEqual(2000);
  });
  it("should check invalid deposit", () => {
    expect(account.putValue(-1)).toEqual("invalid value");
  });
});
