// Considere um objeto que represente uma conta bancária, 
// a conta possui o nome do titular, o saldo e o limite da conta. 
// É possível fazer operações de consulta de saldo, saque e depósito. 
// No caso de saque é necessário verificar se existe saldo suficiente para retirada, 
// caso o cliente não tenha saldo suficiente para a operação, 
// mas possua limite disponível (e suficiente), o saque poderá ocorrer, 
// nesses casos o saldo do cliente ficará negativo após o saque. 
// Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) 
// ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.
const { withdraw, limitDeactivate, limitDecrease, limitIncrease } = require('./contaBancaria');


describe ('withdraw operation', () => {
    it(' "should withdraw the requested amount if there is enough balance. If there is not enough balance, should use the available limit from the account.', 
    () => {
        const output = 'Your current balance is: -4000. Your current limit is: 1000';
        expect(withdraw(5000)).toEqual(output);
    })
});

describe ('limit increase operation', () => {
    it('should increase the limit of the account', 
    () => {
        const output2 = 'Your limit was increased to 5500';
        expect(limitIncrease(500)).toEqual(output2);
    })
});

describe ('limit decrease operation', () => {
    it('should decrease the limit of the account', 
    () => {
        const output3 = 'Your limit was decreased to 4500';
        expect(limitDecrease(500)).toEqual(output3);
    })
});

describe ('limit deactivate operation', () => {
    it('should deactivate the limit of the account', 
    () => {
        const output4 = "Your limit was deactivated";
        expect(limitDeactivate()).toEqual(output4);
    })
});


