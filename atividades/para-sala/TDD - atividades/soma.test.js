
// A função soma dois números, caso os números sejam iguais, a soma é triplicada
const sum = require('./soma')

describe("sum numbers", () => {
   it('sum of 2 and 3 = 5', () => {

    expect(sum(2, 3)).toEqual(5);
   })

   it('should multiply by 3 if the numbers are equal', () => {
    
     expect(sum(2,2)).toEqual(12);
   })
});