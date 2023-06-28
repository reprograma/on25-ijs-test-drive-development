/*Considere um objeto que represente uma conta bancária, a conta possui o nome do
titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo,
 saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para
 retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível
  (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após
  o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos)
  ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/

  const ContaBancaria = require('./contaBancaria')

  describe("verificar saldo", () => {
      it("verificar saldo do usuário", () => {
        let usuario = new ContaBancaria("Carol", 100, 300, 0, 0)

        const mostrarUsuario = `Olá ${usuario.nome}, seu saldo atual é de R$ ${usuario.saldo} e 
        o seu limite é de R$ ${usuario.limite}.`
        
        expect(ContaBancaria(usuario.saldo)).toEqual(usuario.saldo)
      })
  })

  
