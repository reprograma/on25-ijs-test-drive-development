const checkEvenNumber = require('./numeroPar');

describe("Check even, odd or not a number", () => {
    test("Should check if is not number", () => {
        let string = "oi";
        const output = `${string} não é um número`;
        expect(checkEvenNumber(string)).toEqual(output);
    });
    test("Should check if the number is even", () => {
        let number = 18;
        const output = `${number} é um número par`;
        expect(checkEvenNumber(number)).toEqual(output);
    });
    test("Should check if the number is odd", () => {
        let numberOdd = 7; 
        const output = `${numberOdd} é um número ímpar`;
        expect(checkEvenNumber(numberOdd)).toEqual(output);
        });
});