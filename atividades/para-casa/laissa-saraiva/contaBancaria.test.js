// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. 

// É possível fazer operações de consulta de saldo, saque e depósito. 

// No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. 

// Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. 

// Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

// import
const {withdrawMoney, accountBalance, depositCash} = require('./contaBancaria');
describe("Tests in Bank account", ()=> {
	it("should verify if the withdrawMoney() is working ", ()=> {
		expect(withdrawMoney(100)).toEqual(1900)
	})

  it("should test the show the account balance", ()=> {
		expect(accountBalance("balance")).toEqual("O saldo atual de sua conta é R$1900.");
	})

  it("should test if the depositCash() is working", ()=> {
		expect(depositCash(1000)).toEqual(2900);
	})

  it("", ()=> {
    expect().toEqual();
  })
})