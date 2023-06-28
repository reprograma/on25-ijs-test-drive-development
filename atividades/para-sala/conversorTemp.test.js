const convertCelsiusToFahrenheit = require('./conversorTemp');

describe("Verify convert function", () => {
    test("should check conversion to fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
    }) 
})