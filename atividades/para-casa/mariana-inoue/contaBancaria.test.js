// Considere um objeto que represente uma conta bancária, 
// a conta possui o nome do titular, o saldo e o limite da conta. 
// É possível fazer operações de consulta de saldo, saque e depósito. 

// No caso de saque é necessário verificar se existe saldo suficiente para retirada, OK

// caso o cliente não tenha saldo suficiente para a operação,  
// mas possua limite disponível (e suficiente), o saque poderá ocorrer, 


// nesses casos o saldo do cliente ficará negativo após o saque. 
// Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou 
// desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const  bankAccount = require('./contaBancaria')
describe('testing account bank', () => {
    it('should verify if there is enough balance for withdrawal', () => {
      // const mockAccountInfo = {
      //       bankingAccount: {
      //           name: 'Olivia',
      //           withdrawal: 500.00,
      //           deposit: 800.00
      //       }
      //   }
      const withdrawal = 500 
      const result = 10000 - withdrawal
     
      expect(bankAccount(withdrawal)).toBe('Saque realizado '+ result)
    })

    // it('should verify if there is not enough balance for withdrawal', () => {
    //   const withdrawal = 15000
     
    //   expect(bankAccount(withdrawal)).toBe("Saldo insuficiente para relizar saque")
    // })   
    
    
  it('should verify if there is enough balance for withdrawal', () => {

      const overdraftsWithdrawal = 50000 
      const overdraftsPositive = 55000 - overdraftsWithdrawal
      const bankStatement = 10000 -50000
     
      expect(bankAccount(overdraftsWithdrawal)).toBe('Saque realizado ' + overdraftsPositive + 'sua conta se encontra negativa'+ bankStatement)
    })
})
