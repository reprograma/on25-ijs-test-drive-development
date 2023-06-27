const generateCombinations = require('./generateCombinations')
describe('Verify generateCombinations function', () => {
    it ('Should check if generateCombinations is a function', () => {
        const output = ['d','a', 'da', 'y', 'dy', 'ay', 'day']
        expect(generateCombinations('day')).toEqual(output);
    });
});