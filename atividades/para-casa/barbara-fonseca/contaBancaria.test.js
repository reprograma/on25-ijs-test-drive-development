/* Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. 
É possível fazer operações de consulta de saldo, saque e depósito. 
No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação,
 mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. 
 Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

 FAZER OS TESTES E CRIAR A FUNÇÃO QUE FAZ ESSAS COISAS - CRIAR PARTE POR PARTE
 prazo quarta-feira
 tem que fazer o PR - pull request e, depois, pegar o link do PR e botar no trello - mover pro code review - pegar o card de uma colega e fazer o code review */


const {checkBalance, withdrawMoney, deposit} = require('./contaBancaria')

describe("verify balance", () => {
    test("should check how much is available", () => {
        const account = {
            nomeTitular: "Barbara",
            saldo: 3500,
            limite: 6000,
        };
        const output = 3500
        expect(checkBalance(account)).toEqual(output)
    })
})

describe("verify cash withdrawal", () => {
    test("should check if it's possible withdraw R$ 1.500", () => {
        const account = {
            nomeTitular: "Barbara",
            saldo: 3500,
            limite: 6000,
        };
        withdrawMoney(account, 1500)
        expect(account.saldo).toEqual(2000)
    });

    test("should check if it's possible withdraw R$ 4.000", () => {
        const account = {
            nomeTitular: "Barbara",
            saldo: 3500,
            limite: 6000,
        };
        withdrawMoney(account, 4000)
        expect(account.saldo).toEqual(-500)
        expect(account.limite).toEqual(5500)
    });

    
    test("should check if it's possible withdraw R$ 12.000", () => {
        const account = {
            nomeTitular: "Barbara",
            saldo: 3500,
            limite: 6000,
        };
        const output = "Não é possível realizar a operação!"
        expect(withdrawMoney(account, 12000)).toEqual(output)
    });
})

describe("verify deposit", () => {
    test("should check deposit R$ 500 in account with R$ 3500", () => {
        const account = {
            nomeTitular: "Barbara",
            saldo: 3500,
            limite: 6000,
        };
        let value = 500;

        expect(deposit(account, value)).toEqual(4000)
    })
})