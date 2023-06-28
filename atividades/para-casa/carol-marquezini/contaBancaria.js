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
class ContaBancaria {
    constructor(nome, saldo, limite, saque, deposito) {
        this.nome = nome;
        this.saldo = saldo;
        this.limite = limite;
        this.saque = saque;
        this.deposito = deposito;
    }
}

function depositar(valorDeposito) {
    valorDeposito = 200;
    this.deposito += valorDeposito;
}

function sacar(valorSaque) {
    valorSaque = 100;
    this.saque -= valorSaque ;
}

function atualizarSaldo(saldo) {

    if(saque){
        this.saldo = saldo - sacar
    } else {
        saldo = saldo + depositar
    }
  
}

module.exports = ContaBancaria


