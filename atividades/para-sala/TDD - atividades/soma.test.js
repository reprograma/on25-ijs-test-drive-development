// A função soma dois números, caso os números sejam iguais, a soma é triplicada
const sum = require("./soma");

describe("Sum two numbers", () => {
  it("Sum of 2 and 3 = 5", () => {
    expect(sum(2, 3)).toEqual(5);
  });
});
