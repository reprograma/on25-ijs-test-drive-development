function checksBalance(obj) {
  return obj.saldo + obj.limite 
}

function cashout(obj, saque) {
  const balance = checksBalance(obj)

  if(balance < saque) return "Saldo insuficiente"
  
  if(saque > obj.saldo) {
    const 
      difference = saque - obj.saldo,
      limite = obj.limite - difference

    return {
      ...obj,
      "saldo": -difference,
      "limite": limite
    }
  } else if(saque <= obj.saldo) {
    const difference = obj.saldo - saque

    return {
      ...obj,
      "saldo": difference
    }
  }
}

function changeLimit(obj, newLimit) {
  return {
    ...obj,
    "limite": newLimit
  }
}

function cashDeposit(obj, deposit) {
  return {
    ...obj,
    "saldo": obj.saldo + deposit
  }
}

module.exports = { checksBalance, cashout, changeLimit, cashDeposit }