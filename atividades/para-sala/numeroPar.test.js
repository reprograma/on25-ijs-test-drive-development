const checkEvenNumber = require('./numeroPar')


describe("Even number function", () => {
    test("it should check if number 2 is even", () => {
      const output = "2 é um número par";

      expect(checkEvenNumber(2)).toEqual(output);
    });

    test("it should check if number 1 is even", () => {
      const output = "1 é um número ímpar";

      expect(checkEvenNumber(1)).toEqual(output);
    });

    test("it should check if number n is even", () => {
      const output = "n não é um número";

      expect(checkEvenNumber('n')).toEqual(output);
    });
  })