const generateCombinations = require('./generateCombinations');
const generateComvinations  = require('./generateCombinations');

describe("Verify combinations", ()=> {
    it("Should check valida combinations", ()=>{
        const output= ['d', 'a', 'da','y', 'dy', 'ay', 'day']
        expect(generateCombinations('day')).toEqual(output)
    })
})