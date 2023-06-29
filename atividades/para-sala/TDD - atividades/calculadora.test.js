/* Escreva um teste (e depois a função) para uma função calcule como um troco
 (centavos) será dado em moedas. A função deve receber o valor do troco, e um
 array com as moedas disponíveis. */

 const getChange = require('./calculadora');

 describe("Cash change function", () =>{
    it("Check change in coins", () => {
        const output = [25, 10, 10, 1, 1];
        const inputCoins = [25, 10, 5, 1];

        expect(getChange(47, inputCoins)).toEqual(output);
    });
 });

