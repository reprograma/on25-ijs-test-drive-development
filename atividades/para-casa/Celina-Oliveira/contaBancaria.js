class ContaBancaria {
    constructor(titular, saldo, limite) {
      this.titular = titular;
      this.saldo = saldo;
      this.limite = limite;
    }
  
       consultarSaldo() {
         return this.saldo;
        }

        realizarSaque(valor) {
          if (this.saldo >= valor) {
            this.saldo -= valor;
          } else if (this.saldo + this.limite >= valor) {
            this.saldo -= valor;
          } else {
            throw new Error('Saldo insuficiente e limite indisponível.');
          }
        }

        realizarDeposito(valor) {
            this.saldo += valor;
        }

        ajustarLimite(novoLimite) {
           this.limite = novoLimite;
        }
    
        desativarLimite() {
           this.limite = 0;
        }
    }

  module.exports = ContaBancaria;
