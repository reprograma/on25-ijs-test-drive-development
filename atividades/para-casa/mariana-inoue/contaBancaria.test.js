// Considere um objeto que represente uma conta bancária, 
// a conta possui o nome do titular, o saldo e o limite da conta. 
// É possível fazer operações de consulta de saldo, saque e depósito. 

// No caso de saque é necessário verificar se existe saldo suficiente para retirada, OK

// caso o cliente não tenha saldo suficiente para a operação,  
// mas possua limite disponível (e suficiente), o saque poderá ocorrer, ok


// nesses casos o saldo do cliente ficará negativo após o saque. ok
// Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou ok
// desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const  {bankAccount, adjustAccountBalanceIncrease,  adjustAccountBalanceReduce, closeAccountBalance} = require('./contaBancaria')
describe('testing account bank', () => {
    it('should verify if there is enough balance for withdrawal', () => {

      const withdrawal = 500 
      const result = 10000 - withdrawal
     
      expect(bankAccount(withdrawal)).toBe('Saque realizado '+ result)
    }) 
    
    
  it('should verify if there is enough balance for withdrawal', () => {

      const overdraftsWithdrawal = 50000 
      const overdraftsPositive = 55000 - overdraftsWithdrawal
      const bankStatement = 10000 -50000
     
      expect(bankAccount(overdraftsWithdrawal)).toBe('Saque realizado ' + overdraftsPositive + 'sua conta se encontra negativa'+ bankStatement)
    })

  it('should be possible client to reduce limit',()=>{
    const increaseLimit = 200
    const accountBalance = 10000 + increaseLimit

    expect(adjustAccountBalanceIncrease(increaseLimit)).toBe('Operação realizada com sucesso. Limite aumentado para: ' + accountBalance)
  })

  it('should be possible client to reduce limit',()=>{
    const reduceLimit = 500
    const accountBalance = 10000 - reduceLimit

    expect(adjustAccountBalanceReduce(reduceLimit)).toBe('Operação realizada com sucesso. Limite reduzido para: ' + accountBalance)
  })

  it('should be possible client to inativate account',()=>{
    const inativateConfirm = 'Sim'
    const accountBalance = 10000
    const withdrawal= accountBalance - accountBalance

    expect(closeAccountBalance('Sim')).toBe('Operação realizada com sucesso. Valor de resgate. Conta encerrada ' + withdrawal)
  })

  it('should be possible client to inativate account',()=>{
    const inativateConfirm = 'Não'

    expect(closeAccountBalance('Não')).toBe("Sua continua ativada. Obrigada")
  })

})
