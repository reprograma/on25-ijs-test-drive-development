
const checkEvenNumber = require ('./numeroPar');

describe("verify is numbers", ()=>{
     test("should check if is not a number", () =>{
        let valorString = "oi";
        const output = valorString + " não é um número";
        expect(checkEvenNumber(valorString)).toEqual(output)
      });
    test("shoul check if the number is even", () => {
        let number = 18
         const output = number + " é um número par";
        expect(checkEvenNumber(number)).toEqual(output);
     });

     test("shoul check if the number is odd", () => {
        let numberOdd = 7;
        const output = numberOdd + " é um número ímpar";
        expect(checkEvenNumber(numberOdd)).toEqual(output);
     })
})