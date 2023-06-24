const generateCombinations = require('.//generateCombinations')

describe("verify combinations of chars", () => {
    it("should verify valid combinations", () => {
        const output = ['d', 'a', 'da', 'y', 'dy', 'ay', 'day'];

        expect(generateCombinations('day')).toEqual(output);
    });
});