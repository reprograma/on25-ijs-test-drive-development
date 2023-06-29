// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta.
// É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe 
//saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível
// (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso,
// o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.
const ContaBancaria = require('./contaBancaria');

describe("verificar se as funcoes da conta funcionam", () => {

test('consultar saldo da conta bancaria', () => {
  const conta = new ContaBancaria('Israelly', 1000, 500);
  expect(conta.consultarSaldo()).toBe(1000);
});

test('realizar saque na conta bancaria', () => {
    const conta = new ContaBancaria('Israelly', 1000, 500);
    conta.realizarSaque(700);
    expect(conta.consultarSaldo()).toBe(300);
  });

  test('realizar depósito na conta bancaria', () => {
    const conta = new ContaBancaria('Israelly', 1000, 500);
    conta.realizarDeposito(200);
    expect(conta.consultarSaldo()).toBe(1200);
  });

  test('ajustar limite da conta bancaria', () => {
    const conta = new ContaBancaria('Israelly', 1000, 500);
    conta.ajustarLimite(700);
    expect(conta.limite).toBe(700);
  });

  test('desativar limite especial da conta', () => {
    const conta = new ContaBancaria('Israelly', 1000, 500);
    conta.desativarLimite();
    expect(conta.limite).toBe(0);
  });
});

  