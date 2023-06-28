// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const BankAccount = require('./contaBancaria')

describe("Check bank account features", () => {
    describe("Check account balance and limit", () => {
    test("Should return true if balance is > 0", () => {
        const accountPedro = new BankAccount('Pedro', 200, 0)
        expect(accountPedro.checkBalance()).toEqual(true);
    })

    test("Should return false if balance is <= 0", () => {
        const accountMaria = new BankAccount('Maria', 0, 0)
        expect(accountMaria.checkBalance()).toEqual(false);
    })

    test("Should return true if limit is > 0", () => {
        const accountMaria = new BankAccount('Maria', 0, 100)
        expect(accountMaria.checkLimit()).toEqual(true);
    })

    test("Should return false if limit is <= 0", () => {
        const accountMaria = new BankAccount('Maria', 0, 0)
        expect(accountMaria.checkLimit()).toEqual(false);
    })
})

describe("Withdraw money", () => {
    test("Should withdraw money from bank account if the amount is positive", () => {
        const accountAna = new BankAccount('Ana', 100, 200)
        accountAna.withdraw(100);

        expect(accountAna.balance).toEqual(0)
        expect(accountAna.limit).toEqual(200)
    })

    test("Should withdraw the amount from the account using the balance and limit", () => {
        const accountAna = new BankAccount('Ana', 100, 200)
        accountAna.withdraw(200);

        expect(accountAna.balance).toEqual(-100)
        expect(accountAna.limit).toEqual(100)
    })

    test("Should return the message 'Insufficient funds' if the withdrawal amount is greater than the account balance and limit", () => {
        const accountAna = new BankAccount('Ana', 100, 200)
        expect(accountAna.withdraw(400)).toEqual('Insufficient funds')
    })
})

describe("Cash deposit", () => {
    test("Should deposit into account if amount > 0", () => {
        const accountMaria = new BankAccount("Maria", 500, 100)
        accountMaria.deposit(200);
        expect(accountMaria.balance).toEqual(700)
    })
})

describe("Adjust account limit", () => {
    test("Should adjust account limit", () => {
        const accountAna = new BankAccount("Ana", 100, 200)
        expect(accountAna.limit).toEqual(200)
        accountAna.setLimit(500);
        expect(accountAna.limit).toEqual(500)
    })    
})

describe("Disable the limit", () => {
    test("Should enable or disable account limit", () => {
        const accountAna = new BankAccount("Ana", 100, 200);

        accountAna.setDisableLimit(false);
        expect(accountAna.disabledLimit).toEqual(false)

        accountAna.setDisableLimit(true);
        expect(accountAna.disabledLimit).toEqual(true);

    })
})
})
