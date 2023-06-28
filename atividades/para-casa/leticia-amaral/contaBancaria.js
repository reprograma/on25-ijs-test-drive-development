class Account {
  constructor(nome, saldo, limite) {
    this.nome = nome
    this.saldo = saldo
    this.limite = limite
    this.balance = this.checksBalance()
  }

  checksBalance() {
    return this.saldo + this.limite
  }

  cashout(cash) {
    if(this.balance < cash) return "Saldo insuficiente"
  
    if(cash > this.saldo) {
      const 
        difference = cash - this.saldo,
        limite = this.limite - difference

      return {
        "nome": this.nome,
        "saldo": -difference,
        "limite": limite
      }
    } else if(cash <= this.saldo) {
      const difference = this.saldo - cash

      return {
        "nome": this.nome,
        "saldo": difference,
        "limite": this.limite
      }
    }
  }

  changeLimit(newLimit) {
    if(!newLimit) return {
      "nome": this.nome,
      "saldo": this.saldo
    }
    else return {
      "nome": this.nome,
      "saldo": this.saldo,
      "limite": newLimit
    }
  }

  cashDeposit(deposit) {
    return {
      "nome": this.nome,
      "saldo": this.saldo + deposit,
      "limite": this.limite
    }
  }
}

module.exports = Account