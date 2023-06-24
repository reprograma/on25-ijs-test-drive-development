const checkEvenNumber = require('./numeroPar');

describe("Check even, odd or not number", () => {
    test("Should check if is not a number", () => {    
        let valorString = "true";
        const output = `${valorString} não é um número`;
        expect(checkEvenNumber(valorString)).toEqual(output);    
    })    

    test("Should check if the number is even", () => {    
        const output = " é um número par";
        let numberEven = 18;
        expect(checkEvenNumber(numberEven)).toEqual(numberEven + output);    
    })    

    test("Should check if the number is odd", () => {    
        const output = " é um número ímpar";
        let numberOdd = 7;
        expect(checkEvenNumber(numberOdd)).toEqual(numberOdd + output);    
    })    
});