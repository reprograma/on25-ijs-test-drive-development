const checkEvenNumber = require("./numeroPar");

describe("verify number", () => {
  it("should check if ins't a number", () => {
    let string = "abc";
    expect(checkEvenNumber(string)).toEqual(`${string} não é um número`);
  });
  it("should check if the number is even", () => {
    let number = 18;
    expect(checkEvenNumber(number)).toEqual(`${number} é um número par`);
  });
  it("should check if the number is odd", () => {
    let number = 7;
    expect(checkEvenNumber(number)).toEqual(`${number} é um número ímpar`);
  });
});
