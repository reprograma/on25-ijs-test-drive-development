/*Considere um objeto que represente uma conta bancária, a conta possui o nome do
titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo,
 saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para
 retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível
  (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após
  o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos)
  ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/

const { consultaSaldo, consultaLimite, saqueValor, depositoValor, ajustarLimite } = require('./contaBancaria');

describe("Operações bancárias", () => {

    beforeEach(() => {
        MockCliente = {
            "titular": "Hugo Vasconcelos",
            "saldo": 4400,
            "limite": 5600,
        }
    })

    
    it("Deve consultar o saldo da conta", () => {
        expect(consultaSaldo(MockCliente)).toEqual(4400)
    })

    it("Deve consultar o limite da conta", () => {
        expect(consultaLimite(MockCliente)).toEqual(5600)
    })

    it("Deve realizar o saque quando existe saldo/limite suficiente", () => {
        expect(saqueValor(MockCliente, 400)).toEqual(4000)
    })
    it("Deve impedir o saque quando o saldo/limite é insuficiente", () => {
        expect(saqueValor(MockCliente, 11500)).toEqual(`Olá ${MockCliente.titular}infelizmente o seu saldo é insuficiente para realizar esta operação!`)
    })

    it("Deve realizar depósito", () => {
        expect(depositoValor(MockCliente, 2000)).toEqual(6400)
    })

    it("Deve reajustar o limite para mais", () => {
        expect(ajustarLimite(MockCliente, 350)).toEqual(5950)
    })

    it("Deve reajustar o limite para menos", () => {
        expect(ajustarLimite(MockCliente, -400)).toEqual(5200)
    })

    it("Deve desativar o limite", () => {
        expect(ajustarLimite(MockCliente, 0)).toEqual(0)
    })
})