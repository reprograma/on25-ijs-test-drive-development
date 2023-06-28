/*Considere um objeto que represente uma conta bancária, a conta possui o nome do
titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo,
 saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para
 retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível
  (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após
  o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos)
  ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/

const ContaBancaria = require('./ContaBancaria');

describe('Account Bank tests', () => {
    let conta;

    beforeEach(() => {
      // Criação da conta bancária com saldo inicial, limite e nome do titular
    conta = new ContaBancaria('Dany', 1000, 5000);
    });

    it('Should check the account balance', () => {
    expect(conta.consultarSaldo()).toBe(1000);
    });

    it('Should do a withdrawal with sufficient balance', () => {
    conta.sacar(500);
    expect(conta.consultarSaldo()).toBe(500);
    });

    it('Should do a withdrawal with insufficient balance but available limit', () => {
    conta.sacar(2000);
    expect(conta.consultarSaldo()).toBe(-1000);
    });

    it('Should do a Bank deposit', () => {
    conta.depositar(200);
    expect(conta.consultarSaldo()).toBe(1200);
    });

    it('Should adjust account limit', () => {
    conta.ajustarLimite(6000);
    expect(conta.consultarLimite()).toBe(6000);
    });

    it('Should deactivate the account', () => {
    conta.desativarLimite();
    expect(conta.consultarLimite()).toBe(null);
    });
});