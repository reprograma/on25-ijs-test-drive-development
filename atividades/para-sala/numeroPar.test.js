const checkEvenNumber = require("./numeroPar");

describe("when passing a data check if even, odd or not is a number", () => {
  it("should check if is not a number ", () => {
    let bool = "true";
    const output = `${bool} não é um número`;
    expect(checkEvenNumber(bool)).toBe(output);
  });
  it("should check if the number is even ", () => {
    const output = " é um número par";
    let number = 18;
    expect(checkEvenNumber(number)).toEqual(number + output);
  });
  it("should check if the number is odd ", () => {
    let numberOdd = 7;
    const output = `${numberOdd} é um número ímpar`;
    expect(checkEvenNumber(numberOdd)).toEqual(output);
  });
});
