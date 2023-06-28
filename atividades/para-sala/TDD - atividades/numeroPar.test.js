const checkEvenNumber = require('../numeroPar');

describe("Check if it is even, odd or not a number", () => {

    it("should check if its a number", () => {
        let valorString = "naoumnumero";
        const output = valorString + " não é um número"
        expect(checkEvenNumber(valorString)).toEqual(output);
    });

    it("should try if it's an even number", () => {
        const output = " é um número par";
        let numberEven = 18;
        expect(checkEvenNumber(numberEven)).toEqual(numberEven + output);
    });

    it("should test if the number is odd", () => {
        let numberOdd = 7;
        const output = `${numberOdd} é um número ímpar`
        expect(checkEvenNumber(numberOdd)).toEqual(output);
    })
})
