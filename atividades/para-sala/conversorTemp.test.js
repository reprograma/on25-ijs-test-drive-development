const convertCelsiusToFahrenheit = require('./conversorTemp');

describe("Verify convert function", () => {
    it("Should check convertion to Fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
    })
})