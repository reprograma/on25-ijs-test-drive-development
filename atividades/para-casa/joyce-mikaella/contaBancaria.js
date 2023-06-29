function consultaSaldo(contaBancaria) {
    return contaBancaria.saldo
}

function consultaLimite(contaBancaria) {
    return contaBancaria.limite
}

function saqueValor(contaBancaria, valorSaque) {
    if (valorSaque <= contaBancaria.saldo + contaBancaria.limite) {
        contaBancaria.saldo = contaBancaria.saldo - valorSaque
    } else {
        return `Olá ${contaBancaria.titular}infelizmente o seu saldo é insuficiente para realizar esta operação!`
    }
    return contaBancaria.saldo
}

function depositoValor(contaBancaria, valorDeposito) {
    contaBancaria.saldo = contaBancaria.saldo + valorDeposito
    return contaBancaria.saldo
}

function ajustarLimite(contaBancaria, valorReajuste) {

    if ((valorReajuste) > 0) {
        contaBancaria.limite = contaBancaria.limite + valorReajuste
    } else if ((valorReajuste) < 0) {
        contaBancaria.limite = contaBancaria.limite - Math.abs(valorReajuste)
    } else {
        contaBancaria.limite = 0
    }

    return contaBancaria.limite
}

module.exports = { consultaSaldo, consultaLimite, saqueValor, depositoValor, ajustarLimite } 