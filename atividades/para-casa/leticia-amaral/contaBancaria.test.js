// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o 
// limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é 
// necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente 
// para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo 
// do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais 
// e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.
const Account = require('./contaBancaria')

const account = new Account("Titular", 300, 200)

describe("verifies the functionality of a bank account", () => {
  it("Checks the balance inquiry function", () => {
    const output = 500

    expect(account.checksBalance()).toEqual(output)
  })

  it("Check the cashout function", () => {
    const output = {
      "nome": "Titular",
      "saldo": -200,
      "limite": 0
    }

    expect(account.cashout(500)).toEqual(output)
  })

  it("Check the limit shift function", () => {
    const output = {
      "nome": "Titular",
      "saldo": 300,
      "limite": 700
    }

    expect(account.changeLimit(700)).toEqual(output)
  })

  it("Check the limit clear function", () => {
    const output = {
      "nome": "Titular",
      "saldo": 300
    }

    expect(account.changeLimit(false)).toEqual(output)
  })

  it("Check deposit function", () => {
    const output = {
      "nome": "Titular",
      "saldo": 500,
      "limite": 200
    }

    expect(account.cashDeposit(200)).toEqual(output)
  })
})