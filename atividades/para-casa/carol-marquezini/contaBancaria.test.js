/*Considere um objeto que represente uma conta bancária, a conta possui o nome do
titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo,
 saque e depósito. No caso de saque é nedecessário verificar se existe saldo suficiente para
 retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível
  (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após
  o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos)
  ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/

const { ContaBancaria, consultarSaldo, sacar, depositar } = require('./contaBancaria')

describe("Verificar saldo", () => {
    it("Verifica se o consultar saldo retona saldo + limite.", () => {
        let conta = new ContaBancaria("Carol", 100, 300)

        expect(consultarSaldo(conta)).toEqual(400)
    })
})

describe("Verificar saque", () => {
    it("Quando o saldo for maior que o valor do saque, subtrai do saldo e mantem o limite.", () => {
        let conta = new ContaBancaria("Carol", 100, 300)
        let contaDepoisDoSaque = new ContaBancaria("Carol", 75, 300)

        expect(sacar(conta, 25)).toEqual(contaDepoisDoSaque)

        /* Opcao de teste que valida campo por campo.
        sacar(conta, 25)
        expect(conta.saldo).toEqual(75)
        expect(conta.limite).toEqual(300)
        */
    })

    it("Quando o saldo for menor e limete maior que o valor do saque, subtrai do limite.", () => {
        let conta = new ContaBancaria("Carol", 0, 300)
        let contaDepoisDoSaque = new ContaBancaria("Carol", 0, 250)

        expect(sacar(conta, 50)).toEqual(contaDepoisDoSaque)
    })
})

describe("Verificar deposito", () => {
    it("Atualiza o saldo quando o limite ainda não foi usado.", () => {
        let conta = new ContaBancaria("Carol", 0, 300)
        let contaDepoisDoDeposito = new ContaBancaria("Carol", 100, 300)

        expect(depositar(conta, 100)).toEqual(contaDepoisDoDeposito)
    })

    it("Atualiza o valor do limite quando o saldo está zerado e o limite já foi usado.", () => {
        let conta = new ContaBancaria("Carol", 0, 200)
        let contaDepoisDoDeposito = new ContaBancaria("Carol", 0, 300)

        expect(depositar(conta, 100)).toEqual(contaDepoisDoDeposito)
    })

    it("Atualiza o valor do limite e o saldo.", () => {
        let conta = new ContaBancaria("Carol", 0, 200)
        let contaDepoisDoDeposito = new ContaBancaria("Carol", 50, 300)

        expect(depositar(conta, 150)).toEqual(contaDepoisDoDeposito)
    })

})

