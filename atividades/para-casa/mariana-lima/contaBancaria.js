class Conta {
  constructor(titular, saldo, limite) {
    this.titular = titular;
    this.saldo = saldo;
    this.limite = limite;
  }

  Saldo() {
    return this.saldo;
  }

  saque(Valor) {
    if (Valor <= this.saldo) {
      this.saldo -= Valor;
    } else if (Valor <= this.saldo + this.limite) {
      this.saldo -= Valor;
    }
  }

  deposito(Valor) {
    this.saldo += Valor;
  }

  ajustaLimite(novoLimite) {
    this.limite = novoLimite;
  }

  chequeEspecial() {
    this.limite = 0;
  }

  buscaLimite() {
    return this.limite;
  }
}

module.exports = Conta;
