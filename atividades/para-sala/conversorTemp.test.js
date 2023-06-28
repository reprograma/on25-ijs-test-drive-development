const convertCelsiusToFahrenheit = require("./conversorTemp");

describe(" conversorVerification ", () => {
  it(" should check conversion to farenheit ", () => {
    expect(convertCelsiusToFahrenheit(60)).toEqual(140);
  });
});
