const generateCombinations = require('./generateCombinations');

describe('testing generateCombinations', () => {
    it('should return combinations of a word', () => {
       const output = ['d', 'a',  'da','y', 'dy', 'ay','day'];

       expect(generateCombinations('day')).toEqual(output)

    })
})