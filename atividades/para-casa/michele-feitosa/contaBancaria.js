const contaBancaria = {
    titular:"Michele Feitosa",
    saldo: 10000,
    limite: 25000,
}

function consultarSaldo() {
    return contaBancaria.saldo;
}

function sacar(valor) {
    if (valor <= contaBancaria.saldo) {
        contaBancaria.saldo -= valor;
        console.log("Saque realizado com sucesso. Saldo atual:", contaBancaria.saldo);
    } else if (valor <= (contaBancaria.saldo + contaBancaria.limite)) {
        contaBancaria.saldo -= valor;
        console.log("Saque realizado utilizando o limite. Saldo atual:", contaBancaria.saldo);
    } else {
        console.log("Saldo insuficiente para o saque.");
    }
}

function ajustarLimite(novoLimite) {
    if (contaBancaria.saldo <= novoLimite) {
        contaBancaria.limite = novoLimite;
    } else {
        console.log("Saldo atual é maior que o novo limite. Ajuste não permitido.");
    }
}

 module.exports = consultarSaldo;
 module.exports = sacar;
 module.exports = ajustarLimite; 
