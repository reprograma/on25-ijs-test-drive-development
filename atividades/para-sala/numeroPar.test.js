const checkEvenNumber = require('./numeroPar');

//cenários de teste
//input numero par
//input numero impar
//input string

describe('verify if checkEvenNumber function works correctly', () => {
   //tb posso usar test() em vez de it()
    it('should check if it is not a number', () => {
        let valorString = "oi";
        const output = `${valorString} não é um número`;
        expect(checkEvenNumber(valorString)).toEqual(output);
    })
   
    it('should be an even number', () => {
        let number = 18;
        const output = `${number} é um número par`;
        expect(checkEvenNumber(number)).toEqual(output);
        //const output = " é um número par";
        // expect(checkEvenNumber(number)).toEqual(number + output);
    })

    it('should be an odd number', () => {
        let number = 7;
        const output = `${number} é um número ímpar`;
        expect(checkEvenNumber(number)).toEqual(output);
        
    })
})