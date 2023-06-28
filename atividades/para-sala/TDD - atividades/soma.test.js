const sum = require("./soma");
// A função soma dois números, caso os números sejam iguais, a soma é triplicada
// FAZER O RESTO DO TESTE
describe("sum two numbers", () => {
    test("sum of 2 and 3 equals to 5", () => {
        expect(sum(2, 3)).toEqual(5);
    }) 
})
