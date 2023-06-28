const {operacaoSaque, operacaoLimiteConta, operacaoDeposito, alterarLimiteConta}  = require("./contaBancaria");

describe("Bank system", () => {
    const titular = {
        nomeTitular: "Nicole Fagundes",
        saldo: 100,
        limiteConta: 200,
    }
   
    test("should be able to take the money", () => {
        const saque = 50;

    expect(operacaoSaque(saque)).toBeLessThanOrEqual(titular.saldo);
    }) 

    test("should be able use the limit account", () => {
        const saque = 150;

        expect(operacaoLimiteConta(saque)).toBeLessThanOrEqual(titular.limiteConta);
    }) 

    test("should be able to deposit", () => {
        const deposito = 300;
        expect(operacaoDeposito(deposito)).toEqual(400);
    })

    test("should be able to increase account limit", () => {
        const novoSaldo = 300;
        expect(alterarLimiteConta(novoSaldo)).toBeGreaterThanOrEqual(500);
    })

    test("should be able to lower account limit", () => {
        const novoSaldo = 130;
        expect(alterarLimiteConta(novoSaldo)).toBeLessThanOrEqual(70);
    })
})