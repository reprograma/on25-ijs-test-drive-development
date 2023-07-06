const ContaBancaria = require('./contaBancariaDois');

describe('ContaBancaria', () => {
  let minhaConta;

  beforeEach(() => {
    minhaConta = new ContaBancaria('João', 1000, 500);
  });

  it('deve retornar o saldo corretamente', () => {
    expect(minhaConta.consultarSaldo()).toBe(1000);
  });

  it('deve depositar o valor corretamente', () => {
    minhaConta.depositar(500);
    expect(minhaConta.consultarSaldo()).toBe(1500);
  });

  it('deve sacar o valor corretamente quando há saldo suficiente', () => {
    minhaConta.sacar(500);
    expect(minhaConta.consultarSaldo()).toBe(500);
  });

  

  it('deve lançar um erro ao tentar sacar um valor maior que o saldo e limite disponível', () => {
    expect(() => {
      minhaConta.sacar(2500);
    }).toThrowError('Saldo insuficiente e limite indisponível para o saque.');
  });

  it('deve ajustar o limite corretamente', () => {
    minhaConta.ajustarLimite(1000);
    expect(minhaConta.limite).toBe(1000);
  });
})