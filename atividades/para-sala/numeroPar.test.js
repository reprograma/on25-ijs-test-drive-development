const checkEvenNumber = require('./numeroPar');

describe('Check if it is a number', () => {

    test("Should check if it is not a number", () => {
        let string = "t";
        const output =  `${string} não é um número`
      expect(checkEvenNumber(string)).toEqual(output);  
    })

    test("should check if the number is even", () => {
      //const output = " é um número par"
      let number = 18;
      const output =  `${number} é um número par`
      expect(checkEvenNumber(number)).toEqual(output);  
    })

    test("Should check if the number is odd", () => {
        let numberOdd = 11;
        const output =  `${numberOdd} é um número ímpar`
        expect(checkEvenNumber(numberOdd)).toEqual(output);  
    })
    
} )