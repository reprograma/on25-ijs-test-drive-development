// Considere um objeto que represente uma conta bancária, 
//a conta possui o nome do titular, o saldo e o limite da conta. 
//É possível fazer operações de consulta de saldo, saque e depósito. 
// No caso de saque é necessário verificar se existe saldo suficiente para retirada, 
//  caso o cliente não tenha saldo suficiente para a operação, 
//  mas possua limite disponível (e suficiente),o saque poderá ocorrer, 
//  nesses casos o saldo do cliente ficará negativo após o saque. 
//  Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. 
//  Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.


const contaBancaria = require('./contaBancaria'); 
describe('Conta Bancária', () => {
  
    it('deve retornar o saldo atual da conta', () => {
      expect(contaBancaria.consultarSaldo()).toEqual(1000);
    });
    it('deve realizar um saque com saldo suficiente', () => {
        contaBancaria.saldo = 1000;
        contaBancaria.sacar(500);       
        expect(contaBancaria.saldo).toEqual(500);
        expect(contaBancaria.consultarSaldo()).toEqual(500);
    });
  
      it('deve realizar um saque com uso do limite disponível', () => {
        contaBancaria.saldo = 1000;
        contaBancaria.limite = 500;        
        contaBancaria.sacar(1500);      
        
        expect(contaBancaria.saldo).toEqual(-500);
       

    });
  
    it('não deve realizar um saque sem saldo suficiente e limite indisponível', () => {
        contaBancaria.saldo = 1000;
        contaBancaria.limite = 0;
        contaBancaria.sacar(1500);

        expect(contaBancaria.saldo).toEqual(1000); 
    });

    it('deve realizar deposito na conta', () => {
        contaBancaria.saldo = 1000;
        contaBancaria.depositar(500);
        
        expect(contaBancaria.saldo).toEqual(1500);
    
    });

    it('deve ajustar o limite da conta', () => {
        contaBancaria.ajustarLimite(1000)
        expect(contaBancaria.limite).toEqual(1000);
     });

     it('deve consultar o limte', () => {
        expect(contaBancaria.consultarLimite()).toEqual(1000)
     });

    it('deve desativar o limite da conta', () => {
       expect(contaBancaria.desativarLimite()).toBe(0);
    });

});