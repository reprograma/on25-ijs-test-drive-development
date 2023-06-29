const {
  checkBalance,
  withdraw,
  makeDeposit,
  increasedLimit,
  decreasedLimit,
  desactivatedLimit,
} = require("./contaBancaria");

describe("Test if Bank Account Function works", () => {
  it("should show the exact amount of the bank account", () => {
    expect(checkBalance(1000)).toEqual(1000);
  });
  it("should deposit amount into the account", () => {
    expect(makeDeposit(500)).toEqual(1500);
  });
  it("should enable withdraw when sufficient balance", () => {
    const output = "Saque efetuado";
    expect(withdraw(100)).toEqual(output);
  });
  it("should enable withdraw when insufficient balance and the limit is sufficient", () => {
    const output = "Saldo negativo e limite disponível";
    expect(withdraw(1005)).toEqual(output);
  });

  it("should increase the account limit", () => {
    expect(increasedLimit(600)).toEqual(3600);
  });
  it("should decrease the account limit", () => {
    expect(decreasedLimit(600)).toEqual(3000);
  });

  it("should disable the account limit", () => {
    const bankAccount = {
      nome: "Clara",
      saldo: 1000,
      limite: 3000,
    };
    desactivatedLimit(bankAccount);
    expect(bankAccount.limite).toBeNull();
  });
});
