/* Escreva um teste (e depois a função) para uma função calcule como um troco
 (centavos) será dado em moedas. A função deve receber o valor do troco, e um
 array com as moedas disponíveis. */

 const getChange = require('./calculadora');

 describe("cash change function", () => {
     it("check change in coins", () => {
        const output = [ 50, 50 ]
 
        const input = [50, 25, 1]
 
        expect(getChange(100,input )).toEqual(output);
     });
 });