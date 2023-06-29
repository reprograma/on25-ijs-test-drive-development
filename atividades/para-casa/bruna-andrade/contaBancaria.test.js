//Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta.

//É possível fazer operações de consulta de saldo, saque e depósito.

/*No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para
a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque.*/

//Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.
//Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const bankAccount = require("./contaBancaria");

// Cria uma nova instância da classe bankAccount
let account = new bankAccount("Bruna", 2000, 2000);

describe("When to query account details", () => {
  // Verifica se o saldo da conta é o esperado
  it("should consult the account balance", () => {
    expect(account.balance).toEqual(2000);
  });

  // Verifica se o limite da conta é o esperado
  it("should consult the account limit", () => {
    expect(account.limit).toEqual(2000);
  });

  // Verifica se o limite da conta pode ser desativado
  it("should check if limit is disabled", () => {
    account.setStatus(false);
    expect(account.status).toEqual(false);
  });

  // Verifica se o limite da conta pode ser ativado
  it("should check if limit is enabled", () => {
    account.setStatus(true);
    expect(account.status).toEqual(true);
  });

  // Verifica se o limite da conta pode ser alterado
  it("should consult the new limit of the account", () => {
    account.setLimit(5000);
    expect(account.limit).toEqual(5000);
  });

  // Verifica se um saque pode ser realizado com o limite ativado
  it("should refer to new account limit after withdrawal with activated limit", () => {
    account.setStatus(true);
    account.withdraw(2500);
    expect(account.balance).toEqual(-500);
  });

  // Verifica se um saque não pode ser realizado com o limite desativado
  it("should consult balance after withdrawing with deactivated limit", () => {
    account.setStatus(false);
    expect(account.balance).toEqual(-500);
    expect(account.withdraw(500)).toEqual(
      "Insufficient balance or disabled limit"
    );
  });

  // Verifica se um depósito pode ser realizado
  it("should confirm the deposit", () => {
    account.deposit(2500);
    expect(account.balance).toEqual(2000);
  });

  // Verifica se um depósito inválido é rejeitado
  it("should check invalid deposit", () => {
    expect(account.deposit(-1)).toEqual("invalid value");
  });
});
