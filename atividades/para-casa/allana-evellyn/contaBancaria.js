let bankAccountData = [];

const withdrawCash = (cash) => {
  const balance = bankAccountData[0]?.balance;
  const limit = bankAccountData[0]?.limit;

  if (cash === balance || cash <= balance) {
    const newBalance = balance - cash;
    bankAccountData[0].balance = newBalance;
    console.log(
      `Saque realizado com sucesso! Seu novo saldo é de ${newBalance}`
    );
  } else if (cash > balance && cash <= limit) {
    const deficit = cash - balance;
    const newBalance = 0;
    const newLimit = limit - deficit;
    bankAccountData[0].balance = newBalance;
    bankAccountData[0].limit = newLimit;
    console.log(
      `Você utilizou o limite da sua conta! Seu novo saldo é de ${newBalance} e seu novo limite é de ${newLimit}`
    );
  } else if (cash > limit) {
    const forbiddenMessage = "Você não tem limite suficiente";
    console.log("Você não tem limite suficiente");
    return forbiddenMessage;
  }
};

const depositCash = (cash) => {
  bankAccountData[0].balance = cash;
  console.log(
    `Depósito realizado com sucesso! Seu novo saldo é de ${bankAccountData[0].balance}`
  );
};

const checkAccountBalance = (name) => {
  const account = bankAccountData.find((account) => account.name === name);

  if (account) {
    console.log(
      `Boas vindas, ${name}! Seu saldo atual é de ${account.balance}`
    );
  } else {
    const notFoundMessage = `Conta não encontrada para o nome ${name}`;
    console.log(`Conta não encontrada para o nome ${name}`);
    return notFoundMessage;
  }
};

const createBankAccount = (name, balance, limit) => {
  bankAccountData.push({ name, balance, limit });
  console.log(`Sua conta foi criada com sucesso! 
        Nome: ${name}
        Saldo: ${balance}
        Limite: ${limit}`);
  return bankAccountData;
};

withdrawCash(1500);

module.exports = {
  bankAccountData,
  withdrawCash,
  depositCash,
  checkAccountBalance,
  createBankAccount,
};
