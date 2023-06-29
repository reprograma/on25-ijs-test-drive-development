const generateCombinations = require('./generateCombinations');

describe("verify combinations", () => {
    it("should check vaid combinations", () => {
        const output = ['d','a','da','y','dy','ay','day']

        expect(generateCombinations('day')).toEqual(output)
    })
})