const bankAccount = require("./contaBancaria");

describe("Conta Bancária", () => {
  bankAccount.createBankAccount("Allana", 2000, 4000);

  it("should withdraw cash", () => {
    bankAccount.withdrawCash(2000);
    const newBalance = bankAccount.bankAccountData[0]?.balance;

    const output = 0;

    expect(newBalance).toEqual(output);
  });

  it("should withdraw from account limit", () => {
    bankAccount.withdrawCash(3000);

    const newBankAccount = bankAccount.bankAccountData;

    const output = [{ balance: 0, name: "Allana", limit: 1000 }];

    expect(newBankAccount).toEqual(output);
  });

  it("should not allow cash withdraw when balance and limit arent enough", () => {
    bankAccount.withdrawCash(5000);

    const message = "Você não tem limite suficiente";

    const output = "Você não tem limite suficiente";

    expect(message).toEqual(output);
  });

  it("should deposit cash", () => {
    bankAccount.depositCash(5000);

    const newBankAccountBalance = bankAccount.bankAccountData[0]?.balance;

    const output = 5000;

    expect(newBankAccountBalance).toEqual(output);
  });

  it("should check if there is a bank account", () => {
    bankAccount.checkAccountBalance("Maria");
    const forbiddenMessage = "Conta não encontrada para o nome Maria";

    const output = "Conta não encontrada para o nome Maria";

    expect(forbiddenMessage).toEqual(output);
  });
});
