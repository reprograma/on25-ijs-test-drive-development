// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.
const Conta = require('./contaBancaria');
let conta = new Conta('Carla Marques', 1000, 1000);
describe('Verification the operations of a bank account', () => {
    it('Checking account balance', () => {
        expect(conta.saldo).toEqual(1000);
    });
    it('Checking account limit', () => {
        expect(conta.limite).toEqual(1000);
    }); 
    it('Checking disabled status of limit', () => {
        conta.statusLimite(false);
        expect(conta.status).toEqual(false);
    });
    it('Checking enabled status of limit', () => {
        conta.statusLimite(true);
        expect(conta.status).toEqual(true);
    });
    it('Checking the new limit of account', () => {
        conta.novoLimite(45454);
        expect(conta.limite).toEqual(45454);
    });
    it('Checking account balance after withdrawing with limit enabled', () => {
        conta.statusLimite(true);
        conta.sacar(1500);
        expect(conta.saldo).toEqual(-500);
    });
    it('Checking balance after withdrawing with limit deactived', () => {
        conta.statusLimite(false); 
        expect(conta.saldo).toEqual(-500); //Confirmando que o saldo ainda está em -500 do teste anterior
        expect(conta.sacar(500)).toEqual('Saldo insuficiente ou limite desativado');
    });
    it('Checking deposit', () => { 
        conta.depositar(2500);
        expect(conta.saldo).toEqual(2000);
    }); 
    it('Checking invalid deposit', () => { 
        expect(conta.depositar(-1)).toEqual('Valor inválido');
    });
});