// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.
class Conta {
    constructor(titular, saldo, limite) {
        this.titular = titular;
        this.saldo = saldo;
        this.limite = limite;
        this.status = true;
    } 
    novoLimite(valor){
        if (valor < 0){
            return 'Valor inválido';
        }else{
            this.limite = valor;
        }
    } 
    statusLimite(condicao){
        if (condicao === true){
            this.status = true; 
        } else if (condicao === false){
            this.status = false;
        } else {
            return 'Valor inválido';
        }
    } 
    sacar(valor){
        let saldoDisponivel = this.limite + this.saldo
        if(this.saldo >= valor){
            this.saldo -= valor;
        }else if(this.saldo < valor && saldoDisponivel >= valor && this.status == true){ // Limite ativo
            this.saldo -= valor;
        }else{
            return 'Saldo insuficiente ou limite desativado';
        }
    }
    depositar(valor){
        if (valor <= 0){
            return 'Valor inválido';
        }else{
            this.saldo += valor;
        }
    }
}

// let conta = new Conta('Carla Marques', 1000, 1000); 
// console.log(conta.saldo, conta.limite)
// conta.statusLimite(false)
// conta.sacar(1500)
// conta.statusLimite(true)
// conta.sacar(1500)	
// console.log(conta.saldo, conta.limite)
// conta.novoLimite(42323)
// console.log(conta.saldo, conta.limite)
// conta.novoLimite(20)
// console.log(conta.saldo, conta.limite)
// conta.depositar(1800)
// console.log(conta.saldo, conta.limite)

module.exports = Conta;