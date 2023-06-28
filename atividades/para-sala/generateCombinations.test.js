const generateCombinations = require("./generateCombinations")

describe('verify combination', () => {
    it('should check valid combination', () => {
        const output = ['d', 'a', 'da' ,'y', "dy", "ay", 'day']
        expect(generateCombinations('day')).toEqual(output)
    })
})