function operacaoSaque(saque){

    const titular = {
        nomeTitular: "Nicole Fagundes",
        saldo: 100,
        limiteConta: 200,
    }

    if(saque <= titular.saldo){
        titular.saldo -= saque;
        console.log(`Saque realizado com sucesso. Seu saldo é de ${titular.saldo}`)
    } else {
        console.log("Saldo insuficiente");
    }
    return titular.saldo;
}

function operacaoLimiteConta(saque){
    const titular = {
        nomeTitular: "Nicole Fagundes",
        saldo: 100,
        limiteConta: 200,
    }

    if(saque > titular.saldo && saque <= titular.limiteConta){
        titular.limiteConta - saque;
        console.log(`Utilizado o limite da conta. Seu limite tem ${titular.limiteConta}`)
    } else {
        console.log("Erro ao retirar o dinheiro");
    }

    return titular.limiteConta;
}

function alterarLimiteConta(novoSaldo){
    const titular = {
        nomeTitular: "Nicole Fagundes",
        saldo: 100,
        limiteConta: 200,
    }
    if(novoSaldo > titular.limiteConta){
        titular.limiteConta += novoSaldo;
        console.log(`Seu limite agora é: ${titular.limiteConta}`);
    }else if(novoSaldo < titular.limiteConta){
        titular.limiteConta -= novoSaldo;
        console.log(`Seu limite agora é: ${titular.limiteConta}`)
    } else {
        console.log("Não foi possível realizar a operação");
    }

    return titular.limiteConta;
}

function operacaoDeposito(valorDeposito){
    const titular = {
        nomeTitular: "Nicole Fagundes",
        saldo: 100,
        limiteConta: 200,
    }

    if(valorDeposito > 0){
        titular.saldo += valorDeposito
        console.log("Depósito realizado. Seu saldo atual é de " + titular.saldo)
    }

    return titular.saldo;
}

module.exports = {operacaoSaque, operacaoLimiteConta, operacaoDeposito, alterarLimiteConta};