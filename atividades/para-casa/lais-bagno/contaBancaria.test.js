/*
 1- Considere um objeto que represente uma conta bancária, 
 2- a conta possui o nome do titular, 
 3- o saldo e o limite da conta. 
 4- É possível fazer operações de consulta de saldo, 
 5- saque 
 6- e depósito.
  No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/

  const {takeMoney, depositMoney, seeBalance, ajustLimit, deactivateLimit} = require('./contaBancaria');

  describe("Verificar se o takeMoney funciona", () => {
    it("deve criar a função", () => {
        expect(takeMoney()).toBeTruthy();
    });

    it("Verificar atualização do saldo", () => {
        const saque = 300;
        const output = 500 - 300

        expect(takeMoney(saque)).toEqual(output)
    });

  });

  describe("Verificar deposito", () => {
    it("Verificar novo saldo", () => {
        const deposit = 300;
        const output = 500 + 300;

        expect(depositMoney(deposit)).toEqual(output)
    });
  });

  describe("Verificar saldo", () => {
    it("Verificar saldo", () => {
        expect(seeBalance()).toBeTruthy();
    });
  });

  describe("verificar limite da conta", () => {
    it("verificar adição de limite", () => {
      expect(ajustLimit("increase", 300)).toEqual(900);
    });

    it("verificar redução de limite", () => {
      expect(ajustLimit("decrease", 300)).toEqual(300);
    });

    it("verificar se o limite foi desativado", () => {
      expect(ajustLimit("cancel")).toEqual("Seu Limite adicional foi desativado.");
    });
  });
  



