//Considere um objeto que represente uma conta bancária
//a conta possui o nome do titular, o saldo e o limite da conta. 
//É possível fazer operações de consulta de saldo, saque e depósito. 
//No caso de saque é necessário verificar se existe saldo suficiente para retirada, 
//caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível (e suficiente), 
//o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após o saque. 
//Além disso, o limite de uma conta pode ser reajustado (para mais e para menos) ou desativado. 
//Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.

const { contaBancaria, isObject, isAcountComplete, showBalance, withDrawalFromBalance, withdrawFromLimit, makeDeposit, raiseLimit, lowerLimit, disableLimit } = require("./contaBancaria")

describe ("function bank", () => { 
    //teste para ver se a conta é um objeto
    it("expects the account to be an object", () => {
        expect(isObject(contaBancaria)).toBe(true)
    })
    // teste para ver se a conta tem titular, saldo limite
    it("expects object to have name, balance and limit ", () => { 
        expect(isAcountComplete(contaBancaria)).toBe(true)
    }); 
    // teste para ver se mostra o saldo
    it("should show balance", () => {
        expect(showBalance(contaBancaria)).toEqual(1000)
    })
    // teste para ver se o saque funciona
    it("should show new balance after withdrawal", () => {
        expect(withDrawalFromBalance(contaBancaria, 200)).toEqual(800)
    })
    // teste para ver se o if que verifica se existe saldo suficiente para o saque funciona
    it("should show a message and denial the withdrawal if the balance is insufficient", () => {
        expect(withDrawalFromBalance(contaBancaria, 1200)).toEqual("O saque de 1200 não é possível, seu saldo é de apenas 1000") // pode melhorar pra passar as variáveis e não a frase inteira
    })
    // teste para ver se caso não haja saldo, se o limite permite o saque
    it("should see if the limit permits the withdrawal in case balance is insufficient", () => {
        expect(withdrawFromLimit(contaBancaria, 1500)).toEqual('Saque realizado do limite. Limite restante: 500')
    })
    // teste para ver se o depósito funciona
    it("should show new balance after deposit", () => {
        expect(makeDeposit(contaBancaria, 1000)).toEqual(2000)
    })
    // teste para ver se limite aumentou
    it("should raise the account limit", () =>  {
        expect(raiseLimit(contaBancaria, 1000)).toEqual(3000) // este teste e o do de diminuir limite só passam sozinhos pq acima eu modifiquei o limite no teste da função withdrawalFromLimit
    })
    // teste para ver se dá para diminuir o limite
    it("should lower the account limit", () =>  {
        expect(lowerLimit(contaBancaria, 1000)).toEqual(1000)
    })
    // teste para desativar o limite
    it("should desactivate the limit", () => {
        expect(disableLimit(contaBancaria)).toEqual("Limite desativado com sucesso!")
    })
})

//Melhorias:
// a função withDrawalFromBalance e withdrawFromLimit podiam ser a mesma ?
// os toEqual com string poderiam passar as variáveis e não a string inteira
// o contaBancaria poderia ser um beforeEach(), inclusive resolveria o comentário da linha 43