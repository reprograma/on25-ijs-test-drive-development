
function contaBancaria (nome, saldo, limite) {
    this.name = nome;
    this.balance = saldo;
    this.limit = saldo + limite;
}

const client = new contaBancaria ("Maria", 1000, 600);

function balance() {
    return `${client.name} o seu saldo é R$ ${client.balance}`; 
}

function withdraw(amount) {
    if (amount > 0 && amount <= client.balance) {
        client.balance -= amount;

        return `${client.name}, você fez um saque de R$ ${amount}. Seu novo saldo é R$ ${client.balance}!`;        
        
    } else if(amount > 0 && amount > client.balance && amount <= client.limit) {
        client.balance = client.balance - amount;

        return `${client.name}, você fez um saque do cheque especial de R$ ${amount}. Seu novo saldo é R$ ${client.balance}!`;

    } else {
        return 'Saldo insuficiente para saque!';        
    }
}

function deposit(amount) {
    if(amount > 0) {
        client.balance += amount;

        return `${client.name}, você fez um depósito de R$ ${amount}. Seu novo saldo é R$ ${client.balance}!`;
    }
}

module.exports = {contaBancaria, balance, withdraw, deposit}