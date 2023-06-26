/*Considere um objeto que represente uma conta bancária, a conta possui o nome do
titular, o saldo e o limite da conta. 

É possível fazer operações de consulta de saldo,
 saque e depósito. 
 
 No caso de saque é necessário verificar se existe saldo suficiente para
 retirada, 
 
 caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível
  (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após
  o saque.
  
  Além disso, o limite de uma conta pode ser reajustado (para mais e para menos)
  ou desativado. ]]Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/

const { withdraw, totalBalance, makeDeposit } = require("./contaBancaria");

describe("bank account function", () => {
  it("should withdraw amount from the account when sufficient balance", () => {
    expect(withdraw(100)).toEqual(900);
  });
  it("should show the exact amount of the bank account", () => {
    expect(totalBalance(1000)).toEqual(1000);
  });
  it("should deposit amount into the account", () => {
    expect(makeDeposit(500)).toEqual(1500);
  });
});
