// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.


const {bankAccount, deposit, withdraw} = require('./contaBancaria')

describe('Should check a bank account information', () =>{
    let name = 'Yela';
    let balance = 2000;
    let limit = 500;
    let withdrawMoney = 200;
    test('check the name, balance and limit of a bank account', () => {
        const output = `Seu nome é ${name}, seu saldo é ${balance}, seu límite é ${limit}`
        expect(bankAccount('Yela', 2000, 500)).toEqual(output);
    })

    test('check the deposit to a bank account', () =>{
        const output = `Seu deposito foi de ${deposit}`
        expect(deposit(500)).toEqual(output)

    })

    test('check the withdraw of a bank account', () =>{
        const output = 'Saldo insuficiente'
        expect(withdraw(200)).toEqual(output)
    })
})
