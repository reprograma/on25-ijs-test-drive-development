const generateCombinations = require("./generateCombinations")

describe("verifiy combinations function", () => {
    it("should check valid combinations", () => {
        const output = ['d', 'a', 'da', 'y', 'dy', 'ay', 'day']

        expect(generateCombinations('day')).toEqual(output)
    })

})