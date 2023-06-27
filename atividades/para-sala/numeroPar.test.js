const checkEvenNumber = require('./numeroPar');

describe("Check even or odd a number", () => {
  test("Should check if is not a number", () => {
    let valorString = "oi";
    const output = `${valorString} não é um número`;
    expect(checkEvenNumber(valorString)).toEqual(output);
  });

  it("should check if the number is even", () => {
    const number = 18;
    expect(checkEvenNumber(number)).toEqual(`${number} é um número par`);
  });

  test("Should check if the number is odd", () => {
    const number = 7;
    expect(checkEvenNumber(number)).toEqual(`${number} é um número ímpar`);
  })
});