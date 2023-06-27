const convertCelsiusToFahrenheit = require('.//conversorTemp');

describe("verify temperature convertion from Cº to Fº function", () => {
    it("should verify if the converstion to Fahreheit worked", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    })
})