//  importação
const generateCombinations = require('./generateCombinations');

// descrição
describe("Verify Combinations", ()=> {
  
  // descrição
  test("should chack valid combinations", ()=> {
    const output = ['d','a', 'da', 'y', 'dy', 'ay','day']
    expect(generateCombinations('day')).toEqual(output);
  })
})