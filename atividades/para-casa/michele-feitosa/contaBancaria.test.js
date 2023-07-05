<<<<<<< HEAD:atividades/para-casa/michele-feitosa/contaBancaria.test.js
// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const consultarSaldo = require('./contaBancaria');
const sacar = require('./contaBancaria');
const ajustarLimite = require('./contaBancaria');

describe ("function check balance", () => {
    const contaBancaria = { 
        saldo: 10000
    }
    test("consultarSaldo deve retornar o saldo da conta bancária", () => {
        expect(consultarSaldo(contaBancaria.saldo)).toEqual(10000);
    });
})
=======
/*Considere um objeto que represente uma conta bancária, a conta possui o nome do
titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo,
 saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para
 retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível
  (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após
  o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos)
  ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/
>>>>>>> 67e3fb4f323fefb153fdbb721c71526b4a58deb2:atividades/para-casa/mariana-lima/contaBancaria.test.js
