
// A fun��o soma dois n�meros, caso os n�meros sejam iguais, a soma � triplicada

const sum = require('./soma');

describe("Sum two numbers", () =>{
    it("Sum of 2 and 3 = 5", () => {
        expect(sum(2, 3)).toEqual(5);
    })
})