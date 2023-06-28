const convertCelsiusToFahrenheit = require("./conversorTemp");

describe("verify covert function", () => {
  it("should check conversion to fahrenheit", () => {
    expect(convertCelsiusToFahrenheit(60)).toEqual(140);
  });
});
