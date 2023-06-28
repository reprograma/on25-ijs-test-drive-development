const checkEvenNumber = require("./numeroPar")


describe('Check even ,odd  or not a number', () => {
    it('Should check if the not number', () => {
        const text = 'text'
        const output = `${text} não é um número`
        expect(checkEvenNumber(text)).toEqual(output)
        expect(checkEvenNumber(text)).not.toBeNaN()
    })
     it('Should check if the number is even', () => {
        const number = 18
        const output = `${number} é um número par`
        expect(checkEvenNumber(number)).toEqual(output)
    })
    it('Should check if the number is odd', () => {
        const number = 17
        const output = `${number} é um número ímpar`
        expect(checkEvenNumber(number)).toEqual(output)
    })
})
