const convertCelsiusToFahrenheit = require('./conversorTemp');

describe("Verify convert function", () => {
    
    it("Should check conversion to Farenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
    } )

})
