const generateCombinations = require('./generateCombinations');

describe('Verify combinations', () => {
    test("Should check valid combinations", () => {
       const output = ['d', 'a', 'da', 'y', 'dy', 'ay', 'day'];
       expect(generateCombinations('day')).toEqual(output); 
    })
    
})