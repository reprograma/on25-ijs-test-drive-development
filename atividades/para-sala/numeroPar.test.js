const checkEvenNumber = require("./numeroPar")

describe("check even, odd or not a number", () => {

    test("should check if the number is even", () => {
        const output = " é um número par";
        let number = 20;
        expect(checkEvenNumber(number)).toEqual(number + output);
    });

    test("should check if is not a number", () => {
        let string = "oi";
        const output = `${string} não é um número`;
        expect(checkEvenNumber(string)).toEqual(output);
    });

    test("should check if the number is odd", () => {
        let numberOdd = 7;
        const output = `${numberOdd} é um número ímpar`;
        expect(checkEvenNumber(numberOdd)).toEqual(output);
    });
});