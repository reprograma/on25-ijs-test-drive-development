/*Considere um objeto que represente uma conta bancária, a conta possui o nome do
titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo,
saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para
retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível
(e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após
o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos)
ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/

//forma 1
const {
    getBankAccountBalance, 
    checkBankAccountBalance, 
    getSpecialCredit,
    withdraw,
    changeSpecialCredit,
    deposit
} = require('./contaBancaria');


describe("", () => {

    describe("verify getBankAccountBalance function ", () => {
     
        it("should create function getBankAccountBalance", () => {
            expect(getBankAccountBalance()).toBeTruthy();
        })
    
        it('should get bank account balance', () => {
            const bankAccount = {
                balance: 1000,
            }
            expect(getBankAccountBalance()).toEqual(bankAccount.balance);
        })
    })
    
    describe("verify checkBankAccountBalance function ", () => {

    it("should create function checkBankAccountBalance", () => {
    expect(checkBankAccountBalance()).toBeTruthy();
    })

    it('should check if the account balance is positive', () => {
    expect(checkBankAccountBalance()).toEqual(true);
    })

    })
    

    describe("verify getSpecialCredit function ", () => {
     
        it("should create function getSpecialCredit", () => {
            expect(getSpecialCredit()).toBeTruthy();
        })
    
        it('should get bank account special credit', () => {
            const bankAccount = {
                specialcredit: 500,
            }
            expect(getSpecialCredit()).toEqual(bankAccount.specialcredit);
        })
    })


    describe("verify withdraw function", () => {

        it("should create function withdraw", () => {
            expect(withdraw()).toBeTruthy();
        })
      
        it("should check account special credit", () => {
            let specialCredit = getSpecialCredit();
            expect(specialCredit).toBeTruthy();
        })
    
        it("should check new balance after withdrawal", () => {

            const withdrawValue = 300;
            const bankAccount = {
                balance: 1000
            }
            let output = bankAccount.balance - withdrawValue;
            expect(withdraw(withdrawValue)).toEqual(output);
        })
    
    })

    describe("verify changeSpecialCredit function", () => {
        it("should create function changeSpecialCredit", () => {
            expect(changeSpecialCredit()).toBeTruthy();
        })

        it("should increase special credit", () => {
            expect(changeSpecialCredit(500, "increase")).toEqual(1000);
        })

        it("should decrease special credit", () => {
            expect(changeSpecialCredit(100, "decrease")).toEqual(400);
        })

        it("should deactivate special credit", () => {
            expect(changeSpecialCredit(0, "deactivate")).toEqual(0);
        })
        
    })

    describe("verify deposit function", () => {
        it("should create function deposit", () => {
            expect(deposit()).toBeTruthy();
        })

        it("should check new balance after deposit", () => {
            
            const depositValue = 100;
            const bankAccount = {
                balance: 1000
            }
            let output = bankAccount.balance + depositValue;

            expect(deposit(depositValue)).toEqual(output);
        })
    })

})

