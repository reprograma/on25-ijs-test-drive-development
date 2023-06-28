const generateCombinations = require('../generateCombinations')

describe("Verify combinations", () => {

    it("should check for valid combinations", () => {

        const output = ('d', 'a', 'da', 'y', 'dy', 'ay', 'day')

        expect(generateCombinations('day')).toEqual(output)

    });
});

// CORRIGIR !!!!!!!!!!!!1