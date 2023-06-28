const convertCelsiusToFahrenheit = require('./conversorTemp');
describe("Verify convert tempeture function", () => {
    it("should check conversion to fahrenheit", () =>{
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
    })
})