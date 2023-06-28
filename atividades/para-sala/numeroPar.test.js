const checkEvenNumber = require("./numeroPar");

describe(" check enven, odd a number ", () => {
  it(" should check if the number is even", () => {
    const num = 6;
    expect(checkEvenNumber(num)).toEqual(`${num} é um número par`);
  });

  it(" should check if the number id odd", () => {
    const num = 3;
    expect(checkEvenNumber(num)).toEqual(`${num} é um número ímpar`);
  });

  it(" should check if is not a number", () => {
    const string = "bubla";
    expect(checkEvenNumber(string)).toEqual(`${string} não é um número`);
  });
});
