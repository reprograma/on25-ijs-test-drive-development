const Conta = require("./contaBancaria");

test("Consulta de saldo", () => {
  const contaIndividual = new Conta("Elvira", 1000, 500);
  expect(contaIndividual.Saldo()).toBe(1000);
});

test("Saque com saldo suficiente", () => {
  const contaIndividual = new Conta("Kissa", 1000, 500);
  contaIndividual.saque(700);
  expect(contaIndividual.Saldo()).toBe(300);
});

test("Saque com saldo insuficiente e limite disponível", () => {
  const contaIndividual = new Conta("Henriqueta", 1000, 500);
  contaIndividual.saque(1500);
  expect(contaIndividual.Saldo()).toBe(-500);
});

test("Saque com saldo insuficiente e limite indisponível", () => {
  const contaIndividual = new Conta("Alessandra", 1000, 500);
  contaIndividual.chequeEspecial();
  contaIndividual.saque(1500);
  expect(contaIndividual.Saldo()).toBe(1000);
});

test("Depósito", () => {
  const contaIndividual = new Conta("Rita", 1000, 500);
  contaIndividual.deposito(500);
  expect(contaIndividual.Saldo()).toBe(1500);
});

test("Ajuste de limite", () => {
  const contaIndividual = new Conta("Giovana", 1000, 500);
  contaIndividual.ajustaLimite(200);
  expect(contaIndividual.buscaLimite()).toBe(200);
});

it("Desativação de limite", () => {
  const contaIndividual = new Conta("Bete", 1000, 500);
  contaIndividual.chequeEspecial();
  expect(contaIndividual.buscaLimite()).toBe(0);
});
