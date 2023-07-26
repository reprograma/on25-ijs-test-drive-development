/*Considere um objeto que represente uma conta bancária, a conta possui o nome do
titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo,
 saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para
 retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível
  (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após
  o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos)
  ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/

  const ContaBancaria = require("./contaBancaria")

describe("Conta Bancária", () => {
    beforeEach(() => {
        return contaLeia = new ContaBancaria("Leia", 300.00, 200.00)
    })

    it("deve retornar o saldo inicial", () => {

        expect(contaLeia.getSaldo()).toEqual(300.00)
    })

    it("deve realizar um depósito", () => {

        expect(contaLeia.setDeposito(50.00)).toEqual(350.00)
    })

    it("deve desativar o limite", () => {

        expect(contaLeia.ativarOuDesativarLimite(false)).toEqual("Limite desativado.")
        expect(contaLeia.getLimite()).toEqual("Limite desativado.")
    })

    it("deve ativar o limite", () => {

        expect(contaLeia.ativarOuDesativarLimite(true)).toEqual(200.00)
        expect(contaLeia.getLimite()).toEqual(200.00)
    })

    test("deve retornar a mensagem de Limite desativado ao tentar editá-lo caso esteja desativado", () => {
        const desativarLimite = contaLeia.ativarOuDesativarLimite(false)
        const tentarEditarLimite = contaLeia.setLimite("aumentar", "100.00")

        expect(desativarLimite).toEqual("Limite desativado.")
        expect(tentarEditarLimite).toEqual("Para editar o valor do limite, você precisa ativá-lo.")
    })

    test("deve mudar o valor do limite para mais, caso esteja ativado", () => {
        const aumentarLimite = contaLeia.setLimite('aumentar', 100.00)

        expect(aumentarLimite).toEqual(300.00)
    })

    test("deve mudar o valor do limite para menos, caso esteja ativado", () => {
        const diminuirLimite = contaLeia.setLimite('diminuir', 100.00)

        expect(diminuirLimite).toEqual(100.00)
    })

    test("deve sacar um valor e ter saldo suficiente", () => {
        const saque = contaLeia.saque(150.00)

        expect(saque).toEqual(150.00)
    })

    test("deve sacar um valor sem saldo suficiente, mas com limite disponível", () => {
        const saque = contaLeia.saque(450.00)

        expect(saque).toEqual(-150)
    })

    test("deve retornar mensagem de erro caso não tenha limite disponível para saque", () => {
        const saque = contaLeia.saque(650.00)

        expect(saque).toEqual("Você não tem saldo nem limite disponível.")
    })
})