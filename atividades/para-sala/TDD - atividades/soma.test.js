
// A função soma dois números, caso os números sejam iguais, a soma é triplicada
const sum = require('./soma')
describe("Sum two numbers", () => {
    it('should sum 5+4 = 9', () => {
        expect(sum(5,4)).toEqual(9)
    })

    it('If numbers equal, should multiple 83 the rresult ', () => {
        expect(sum(5,5)).toEqual(30)
    })


})