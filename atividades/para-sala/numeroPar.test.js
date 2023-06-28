const checkEvenNumber = require('./numeroPar')

describe("Check even, odd or not a number", () => {
    it("Should check if is a number", () => {
        let valorString = 'true';
        const output = `${valorString} não é um número`
        expect(checkEvenNumber(valorString)).toEqual(output)
    })
    it("Should check if the number is even", () => {
        const output = "18 é um número par"
        expect(checkEvenNumber(18)).toEqual(output)
    })
    it("Should check if the number is odd", () =>{
        let numberOdd =7
        const output = `${numberOdd} é um número ímpar`
        expect(checkEvenNumber(numberOdd)).toEqual(output)
    })
})