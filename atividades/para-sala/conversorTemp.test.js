const convertCelsiusToFahrenheit = require('./conversorTemp');

describe("Verify convert temperature function", () => {
    it("should check convertion to Fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
    })
})