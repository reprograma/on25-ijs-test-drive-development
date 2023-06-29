const bankAccount = require('./contaBancaria');

describe('Bank Account', () => {
    beforeEach(() => {
      bankAccount.balance = 0;
      bankAccount.limit = 0;
    });
  
    it('should return the current balance', () => {
      const balance = bankAccount.checkBalance();
      expect(balance).toBe(0);
    });
  
    it('should add the deposit amount to the balance', () => {
      bankAccount.makeDeposit(500);
      const balance = bankAccount.checkBalance();
      expect(balance).toBe(500);
    });
  
    it('should subtract the withdrawal amount from the balance if balance is sufficient', () => {
      bankAccount.makeDeposit(500);
      const withdrawalResult = bankAccount.makeWithdrawal(200);
      const balance = bankAccount.checkBalance();
      expect(withdrawalResult.success).toBe(true);
      expect(withdrawalResult.currentBalance).toBe(300);
      expect(balance).toBe(300);
    });
  
    it('should utilize the limit if balance is insufficient but limit is available', () => {
      bankAccount.limit = 1000; // Set limit to 1000
      const withdrawalResult = bankAccount.makeWithdrawal(700);
      const balance = bankAccount.checkBalance();
      expect(withdrawalResult.success).toBe(true);
      expect(withdrawalResult.currentBalance).toBe(0);
      expect(balance).toBe(0);
    });
  
    it('should not allow withdrawal if balance and limit are insufficient', () => {
      const withdrawalResult = bankAccount.makeWithdrawal(500);
      const balance = bankAccount.checkBalance();
      expect(withdrawalResult.success).toBe(false);
      expect(withdrawalResult.currentBalance).toBe(0);
      expect(balance).toBe(0);
    });
  
    it('should set the limit to the newLimit value', () => {
      bankAccount.adjustLimit(2000);
      const limit = bankAccount.limit;
      expect(limit).toBe(2000);
    });
  });