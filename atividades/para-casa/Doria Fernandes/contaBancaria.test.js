/*Considere um objeto que represente uma conta bancária, a conta possui o nome do
titular, o saldo e o limite da conta. É possível fazer operações de consulta de saldo,
 saque e depósito. No caso de saque é necessário verificar se existe saldo suficiente para
 retirada, caso o cliente não tenha saldo suficiente para a operação, mas possua limite disponível
  (e suficiente), o saque poderá ocorrer, nesses casos o saldo do cliente ficará negativo após
  o saque. Além disso, o limite de uma conta pode ser reajustado (para mais e para menos)
  ou desativado. Use a abordagem Red - Green - Refactor para desenvolver essa aplicação.*/

const  {limite, nome , saldo, consultarSaldo, consultarLimite, saque, depositar, ajustarLimite} = require('./contaBancaria');


 // saque realizado
 describe ('saque function', () => {
    test ('saque valor menor que o saldo', () =>{
        const output = 'Parabéns, saque realizado com sucesso';
        expect(saque (200)).toEqual(output);
        console.log(consultarSaldo());
    })
    test ('valor maior que o saldo, porém menor que o limite',() =>{
        const output = 'Saque realizado com sucesso, foi necessário utilização do seu limite para essa ação.';
        expect(saque (900)).toEqual(output);
        console.log(consultarSaldo());
    })

    // saque não realizado 
    test ('valor maior que saldo e limite', ()=>{
        const output = 'Ops, não foi possível realizar essa operação';
        expect(saque (1700)).toEqual(output);
        console.log(consultarSaldo() +' e ' + consultarLimite());
        //console.log(`${consultarSaldo()} e ${consultarLimite()}`)
    })
 });

 // Depósito

 describe (' depositar function', ()=>{

    test ('Realizar o deposito',()=>{
        const output ='Obrigada por confiar em nossos serviços';
        expect (depositar(500)).toEqual(output);
        console.log('Seu saldo atual é: R$' + saldo);
    })
 });

 // consultar saldo
 describe ('consultarSaldo function', () =>{
    test ('Consultando o saldo atual',()=>{
        const output ='Seu saldo atual é: R$' + saldo;
        expect (consultarSaldo()).toEqual(output);
        console.log(consultarSaldo());
    })
 })

// consultar limite
describe ('consultarLimite function', () =>{
    test ('Consultando o limite atual',()=>{
        const output ='Seu limite atual é de: R$' + limite;
        expect (consultarLimite()).toEqual(output);
        console.log(`${nome}, seu limite atual é de:R$ ${limite}`)
    })
 })

 // Ajustar limite

 describe ('ajustarLimite function',()=>{

    test('Ajustando o limite',()=>{
        const output = 'Limite ajustado com sucesso, aproveite todos os nossos serviços';
        expect (ajustarLimite(1300)).toEqual(output);
        console.log('Limite ajustado com sucesso, aproveite todos os nossos serviços.', consultarLimite());
    })
 })


