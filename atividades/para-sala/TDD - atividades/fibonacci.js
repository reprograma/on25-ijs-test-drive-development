const fibonacciSeq = require('./fibonacci')

describe("Fibonacci function", () => {

    test("Check fibonacci", () => {
        const output = [8,13,21,34,55,89,144];
        
        expect(fibonacciSeq(6,7)).toEqual(output);
    });
});