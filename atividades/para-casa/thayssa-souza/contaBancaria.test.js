// Considere um objeto que represente uma conta bancária, a conta possui o nome do titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo, saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const { bankAccount, withdrawalFunction, depositInAccount, limitChange } = require('./contaBancaria.js');

describe("Check if bank account function returns the corect balance", () =>{
    it("Check should returns error if count isn't an object", () => {
        const stringCount = "conta da Thayssa";
        const numberCount = 457;
        const boolCount = true;

        let output = "Erro 404 - nao foi enviado um objeto";

        expect(bankAccount(stringCount)).toBe(output);
        expect(bankAccount(numberCount)).toBe(output);
        expect(bankAccount(boolCount)).toBe(output);
    });

    it("Check if banck account function is working on", () =>{
        const count = { "clientName": "Thayssa", "balance": 25.00, "limitAccount": 5000.00 };
        let output = `Saldo atual: 25 reais`
    
        expect(bankAccount(count)).toEqual(output);
    });
});

describe("Check if withdrawal function is working on any situations", () => { 
    it("Check if withdrawal function is working when value <= balance", () => {
        const count = { "clientName": "Thayssa", "balance": 2000.00, "limitAccount": 5000.00 };

        let value = 540.00;
        let output = "Saque realizado com sucesso. Saldo atual: 1460 reais";

        expect(withdrawalFunction(count, value)).toEqual(output);
    });

    it("Check if withdrawal function is working when balance < value <= account limit", () => {
        const count = { "clientName": "Thayssa", "balance": 200.00, "limitAccount": 1000.00 };

        let value = 500.00;
        let output = "Saque realizado com sucesso. Saldo atual: -300 reais";

        expect(withdrawalFunction(count, value)).toBe(output);
    });

    it("Check if withdrawal function is working when value > balance and value > limit account", () => {
        const count = { "clientName": "Thayssa", "balance": 2800.00, "limitAccount": 7000.00 };

        let value = 8450.00;
        let output = "Voce nao tem saldo e nem limite disponivel para sacar este valor. Saldo atual: 2800 reais";

        expect(withdrawalFunction(count, value)).toEqual(output);
    });
});

describe("Check deposit in account function", () => {
    it("Check should increased balance if deposit limit > 0", () => {
        const count = { "clientName": "Thayssa", "balance": 100.00, "limitAccount": 500.00 };

        let depositValue = 50;
        let output = "Deposito realizado com sucesso. Saldo atual: 150 reais";

        expect(depositInAccount(count, depositValue)).toBe(output);
    });

    it("Check should keep balance if deposit limit <= 0", () => {
        const count = { "clientName": "Thayssa", "balance": 200.00, "limitAccount": 600.00 };

        let depositValue = -340;
        let output = "Deposito nao realizado. Saldo atual: 200 reais";

        expect(depositInAccount(count, depositValue)).toEqual(output);
    });    
});

describe("Check if changing limit account is working on", () => {
    it("Should changing the limit account for disabled", () => {
        const count = { "clientName": "Thayssa", "balance": 1000.00, "limitAccount": 3000.00 };

        let limitValue = 5400.00;
        let limitSituation = "desativado";

        expect(limitChange(count, limitValue, limitSituation)).toBe("Limite atual: 0 - DESATIVADO");
    });

    it("Should changing the limit account for more or less", () => {
        const count = { "clientName": "Thayssa", "balance": 2000.00, "limitAccount": 5000.00 };

        let increasedLimit = 6500;
        let decreasedLimit = 2500;
        let limitSituation = "Ativado";

        expect(limitChange(count, increasedLimit, limitSituation)).toEqual("Limite alterado para: 6500 reais");
        expect(limitChange(count, decreasedLimit, limitSituation)).toEqual("Limite alterado para: 2500 reais");
    });

    it("Should keep the actual limit account if the client don't choose disabled or enabled limit", () => {
        const count = { "clientName": "Thayssa", "balance": 1700.00, "limitAccount": 3500.00 };

        let limitValue = 5400.00;

        let limitSituation = "nao sei";
        let limitNumber = 25;
        let limitBool = false;

        let output = "Nenhuma alteraçao foi realizada. Limite atual: 3500 reais";
        
        expect(limitChange(count, limitValue, limitSituation)).toEqual(output);
        expect(limitChange(count, limitValue, limitNumber)).toEqual(output);
        expect(limitChange(count, limitValue, limitBool)).toEqual(output);
    })
});
