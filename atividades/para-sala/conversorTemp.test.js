const convertCelsiusToFahrenheit = require("./conversorTemp");

describe("Verify convert function", () => {
  it("should check conversion celcius to fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(60)).toEqual(140);
  });
});
