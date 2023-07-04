//criação de objeto com 3 itens
 

const contaBancaria = {
    nome: "Katia Kelly",
    saldo: 500,
    limite: 1000,
}

function saque (valor){
    if (valor <= contaBancaria.saldo){
        contaBancaria.saldo -= valor;
        return 'Parabéns, saque realizado com sucesso'
    }

     else if((valor> contaBancaria.saldo) && (valor < contaBancaria.limite)){
        contaBancaria.saldo -= valor;
        return 'Saque realizado com sucesso, foi necessário utilização do seu limite para essa ação.'
    }

    else {
        return 'Ops, não foi possível realizar essa operação'};
};

function depositar (valor){
    if (valor > 0){
    contaBancaria.saldo += valor;
    return 'Obrigada por confiar em nossos serviços';
    }
};

function ajustarLimite (valor){
    if (valor > 0){
    contaBancaria.limite = valor;
    return 'Limite ajustado com sucesso, aproveite todos os nossos serviços'
    }
};

function consultarSaldo (){
    return 'Seu saldo atual é: R$' + contaBancaria.saldo;
};

function consultarLimite (){
    return 'Seu limite atual é de: R$' + contaBancaria.limite;
}




module.exports = { consultarSaldo, consultarLimite, saque, depositar, ajustarLimite, saldo: contaBancaria.saldo, limite: contaBancaria.limite, nome: contaBancaria.nome};

