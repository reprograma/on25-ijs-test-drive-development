// A função soma dois números, caso os números sejam iguais, a soma é triplicada
const sum = require("./soma")

describe("sum two numbers", () => {
    test('sum of 2 and 3 = 5', () => {

        expect(sum(2, 3)).toEqual(5);
    });
});