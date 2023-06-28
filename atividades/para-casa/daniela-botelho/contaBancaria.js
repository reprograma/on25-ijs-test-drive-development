const contaBancaria = {
    nomeTitular: 'Dani Botelho',
    saldo: 1000,
    limite: 600,
      
    consultarSaldo() {
      return this.saldo;
    }, 

    consultarLimite() {
     return this.limite;
    },
  

    sacar(valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        return true; 
      } else if (valor <= this.saldo + this.limite) {
        this.saldo -= valor;
        return true;
      } else {
        return false; 
      }
    },
  
    depositar(valor) {
     return  this.saldo += valor;
    },
      
    ajustarLimite(novoLimite) {
      return this.limite = novoLimite;
    },  
  
    desativarLimite() {
      return this.limite = 0;
    }
  };
  
  module.exports  = contaBancaria
