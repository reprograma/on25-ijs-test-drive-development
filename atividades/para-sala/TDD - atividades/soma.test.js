// A função soma dois números, caso os números sejam iguais, a soma é triplicada
// Primeiro fazemos o teste e depois a função
const sum = require("./soma")
describe("sum two numbers", () => {
    it("sum of 2 + 3 = 5", () => {
        expect(sum(2, 3)).toEqual(5);
    })
    it("sum 2 + 2, sum *3, 2 + 2 = 4 *3 = 12", () => {
        expect(sum(2, 2)).toEqual(12)
    })
})