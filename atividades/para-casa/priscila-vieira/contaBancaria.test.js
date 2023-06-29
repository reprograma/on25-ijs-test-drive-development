// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const contaBanco = require('./contaBancaria')

describe("Operations", () => {
    const output = "Operação indisponível";
    test("Should operation deposit", () => {
        expect(contaBanco.depositar(100.00)).toEqual(1100.00);
    })

    test("Should operation to withdraw", () => {
        expect(contaBanco.sacar(50.00)).toEqual(1050.00);
    })

    test("Should balance", () => {
        expect(contaBanco.saldo()).toEqual(1050.00);
    })

    test("Should operation withdraw to the limit", () => {
        expect(contaBanco.sacar(1160.00)).toEqual(output);
    })

    test("Should readjust limit", () => {
        expect(contaBanco.reajustarLimite(200.00)).toEqual(200.00);
    })

    test("Should limit", () => {
        expect(contaBanco.limite()).toEqual(200.00);
    })

    test("Should disable limit", () => {
        expect(contaBanco.desativarLimite()).toEqual(false);
    })

    test("Should readjust limit", () => {
        expect(contaBanco.reajustarLimite(500.00)).toEqual(output);
    })

    test("Should limit", () => {
        expect(contaBanco.limite()).toEqual(output);
    })

})