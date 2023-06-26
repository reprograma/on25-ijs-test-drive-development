function bankAccount(count){
    if(typeof count !== "object"){
        return "Erro 404 - nao foi enviado um objeto"
    } else {
        return `Saldo atual: ${count.balance} reais`;
    }
}

function withdrawalFunction(count, value){
    if(value <= count.balance || value > count.balance && value <= count.limitAccount){
        count.balance -= value;
        return `Saque realizado com sucesso. Saldo atual: ${count.balance} reais`;
    } else if (value > count.balance && value > count.limitAccount){
        return `Voce nao tem saldo e nem limite disponivel para sacar este valor. Saldo atual: ${count.balance} reais`;
    }
};

function depositInAccount(count, value){
    if(value > 0){
        count.balance += value;
        return `Deposito realizado com sucesso. Saldo atual: ${count.balance} reais`;
    } else {
        return `Deposito nao realizado. Saldo atual: ${count.balance} reais`
    }
};

function limitChange(count, newLimit, limitSituation){
    if(limitSituation == "desativado" || limitSituation == "Desativado"){
        count.limitAccount = 0;
        return `Limite atual: ${count.limitAccount} - DESATIVADO`;
    } else if (limitSituation == "ativado" || limitSituation == "Ativado"){
        count.limitAccount = newLimit;
        return `Limite alterado para: ${count.limitAccount} reais`;
    } else {
        return `Nenhuma alteraçao foi realizada. Limite atual: ${count.limitAccount} reais`;
    }
};

module.exports = { bankAccount, withdrawalFunction, depositInAccount, limitChange };