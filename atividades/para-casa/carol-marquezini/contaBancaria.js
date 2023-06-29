/*Considere um objeto que represente uma conta bancária, a conta possui o

[x] nome do titular,
[x] o saldo e o
[x] limite da conta.

É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário
verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a
operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo
do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado
(para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver
essa aplicação.
*/
function ContaBancaria(nome, saldo, limite) {
    this.nome = nome;
    this.saldo = saldo;
    this.limite = limite;
}

const limiteMax = 300;
const limiteMin = 0;

function depositar(conta, valorDeposito) {
  if(conta.saldo > 0 && conta.limite == limiteMax){
      conta.saldo += valorDeposito
      return conta
  } else if (conta.limite < limiteMax){
      conta.limite += valorDeposito
      return conta
  } else {
    if (conta.limite < limiteMax && conta.saldo <= 0){
          conta.limite += valorDeposito
          return conta
      } else {
          conta.saldo += valorDeposito
          return conta
      }
  }
}

function sacar(conta, valorSaque) {

    if (conta.saldo >= valorSaque) {
        conta.saldo -= valorSaque
        return conta
    } else if (conta.limite > valorSaque) {
        conta.limite -= valorSaque
        return conta
    }
}

function consultarSaldo(conta) {

    return conta.saldo + conta.limite

}


module.exports = {
    ContaBancaria,
    consultarSaldo,
    sacar,
    depositar
}


