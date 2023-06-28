const convertCelsiusToFahrenheit = require ('../conversorTemp');

describe("Verify convert function", () => {
    it("should check if the conversion from celsius to farenheit worked", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
    })
})