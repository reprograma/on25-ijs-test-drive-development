
const convertCelsiusToFahrenheit = require('./conversorTemp');
describe("Verify convertCelsiusToFahrenheit function", ()=> {
  test("should verify if the convertion to Fahrenheit is working", ()=> {
    expect(convertCelsiusToFahrenheit(60)).toEqual(140);
  })
})

