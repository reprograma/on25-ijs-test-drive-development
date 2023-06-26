// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta.

// É possível fazer operações de consulta de saldo, saque e depósito.

// No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque.

// Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.

// Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const {withdrawMoney, accountBalance, depositCash, adjustAccountLimit,} = require("./contaBancaria");
describe("Tests in Bank account", () => {
  it("should show the account balance R$2000", () => {
    expect(accountBalance("balance")).toEqual(
      "O saldo atual de sua conta é R$2000."
    );
  });

  it("should withdraw R$500 and return R$1500", () => {
    expect(withdrawMoney(500)).toEqual(1500);
  });

  it("should withdraw R$2000 and return R$-500", () => {
    expect(withdrawMoney(2000)).toEqual(-500);
  });

  it("should return *Unauthorized operation* because there is no money available", () => {
    expect(withdrawMoney(5000)).toEqual("Unauthorized operation.");
  });

  it("should deposit R$1000 and return R$500", () => {
    expect(depositCash(1000)).toEqual(500);
  });

  // Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado.
  it("should increase R$10 in the account limit and return R$3010", () => {
    expect(adjustAccountLimit("increase", 10)).toEqual(3010);
  });

  it("should decrease R$50 in the account limit and return R$2960", () => {
    expect(adjustAccountLimit("decrease", 50)).toEqual(2960);
  });

  it("should remove account limit from the object and return 'Seu Limite adicional foi desativado' ", () => {
    expect(adjustAccountLimit("cancel")).toEqual(
      "Seu Limite adicional foi desativado."
    );
  });
});