class ContaBancaria {
    constructor(nome, saldo, limite) {
        this.titular = nome;
        this.saldo = saldo;
        this.limite = limite;
    }

    consultarSaldo() {
        return this.saldo;
    }

    consultarLimite() {
        return this.limite;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
        this.saldo -= valor;
    } else if (valor <= this.saldo + this.limite) {
        this.saldo -= valor;
    } else {
        console.log('Saldo insuficiente e limite indisponível.');
    }
    }

    depositar(valor) {
    this.saldo += valor;
    }
    
    consultarLimite() {
        return this.limite;
    }

    ajustarLimite(novoLimite) {
    this.limite = novoLimite;
    }

    desativarLimite() {
    this.limite = null;
    }
}

module.exports = ContaBancaria;