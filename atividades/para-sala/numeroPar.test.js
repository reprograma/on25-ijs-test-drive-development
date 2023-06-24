const checkEvenNumber = require ('.//numeroPar');

describe ("Verify if it is an even number, odd or NuN", () => {

    it("should verify if is not a number", () => {
        let valorString = "oi";
        const output = valorString + " não é um número";
        expect(checkEvenNumber(valorString)).toEqual(output);
    });
    it("should verify if the number is even", () => {
        let evenNumber = 18;
        const output = `${evenNumber} é um número par`
        
        expect(checkEvenNumber(evenNumber)).toEqual(output);
    });

    it("should verify if the number is odd", () => {
        let oddNumber = 7;
        const output = `${oddNumber} é um número ímpar`;
        expect(checkEvenNumber(oddNumber)).toEqual(output);
    });
    
})