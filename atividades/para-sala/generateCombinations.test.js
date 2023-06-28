const generateCombinations = require("./generateCombinations")

describe("verify combination", () => {
    test("should check valid combinations", () => {
        const output = ['d', 'a', 'da', 'y', 'dy', 'ay', 'day']
        expect(generateCombinations('day')).toEqual(output)
    });
})