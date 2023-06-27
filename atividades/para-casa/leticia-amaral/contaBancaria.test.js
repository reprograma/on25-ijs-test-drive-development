// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o 
// limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é 
// necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente 
// para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo 
// do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais 
// e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.
const { checksBalance, cashout, changeLimit, cashDeposit } = require('./contaBancaria')

describe("verifies the functionality of a bank account", () => {
  it("Checks the balance inquiry function", () => {
    const
      input = {
        "nome": "Titular",
        "saldo": 200,
        "limite": 1000
      },
      output = 1200

    expect(checksBalance(input)).toEqual(output)
  })

  it("Check the cashout function", () => {
    const
      input = {
        "nome": "Titular",
        "saldo": 300,
        "limite": 200
      },
      output = {
        "nome": "Titular",
        "saldo": -200,
        "limite": 0
      }

    expect(cashout(input, 500)).toEqual(output)
  })

  it("Check the limit shift function", () => {
    const 
      input = {
        "nome": "Titular",
        "saldo": 400,
        "limite": 500
      },
      output = {
        "nome": "Titular",
        "saldo": 400,
        "limite": 700
      }

    expect(changeLimit(input, 700)).toEqual(output)
  })

  it("Check deposit function", () => {
    const 
      input = {
        "nome": "Titular",
        "saldo": 300,
        "limite": 200
      },
      output = {
        "nome": "Titular",
        "saldo": 500,
        "limite": 200
      }

    expect(cashDeposit(input, 200)).toEqual(output)
  })
})