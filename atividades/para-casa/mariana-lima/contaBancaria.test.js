// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const {contaBancaria, balance, withdraw, deposit} = require("./contaBancaria");

describe("check account", () => {
    
    test("check account balance", () => {
        expect(balance()).toEqual("Maria o seu saldo é R$ 1000");
    }); 

    test("check if withdrawal is possible", () => {
        expect(withdraw(100)).toEqual("Maria, você fez um saque de R$ 100. Seu novo saldo é R$ 900!");
    });

    test("check overdraft withdrawal", () => {
        expect(withdraw(1100)).toEqual("Maria, você fez um saque do cheque especial de R$ 1100. Seu novo saldo é R$ -100!");
    });

    test("check if withdrawal is not possible", () => {
        expect(withdraw(2000)).toEqual("Saldo insuficiente para saque!");
    });   
    
    test("check the deposit", () => {
        expect(deposit(100)).toEqual("Maria, você fez um depósito de R$ 100. Seu novo saldo é R$ 1100!");
    });    
});