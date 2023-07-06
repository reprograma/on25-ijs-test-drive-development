class ContaBancaria {
    constructor(nomeTitular, saldo, limite) {
      this.nomeTitular = nomeTitular;
      this.saldo = saldo;
      this.limite = limite;
    }

    consultarSaldo() {
      return this.saldo;
    }

    depositar(valor) {
      this.saldo += valor;
    }

    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
      } else if (valor <= this.saldo + this.limite) {
        this.saldo -= valor;
      } else {
        throw new Error('Saldo insuficiente e limite indisponível para o saque.');
      }
    }

    ajustarLimite(novoLimite) {
      this.limite = novoLimite;
    }
  }

  module.exports = ContaBancaria