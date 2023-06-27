const checkEvenNumber = require('./numeroPar');

describe("Verify inputs", ()=> {
  test ("Should check if the number is even", ()=> {
    const num = 16;
    expect(checkEvenNumber(num)).toEqual(`${num} é um número par`);
  }),

  test(" Should test if the number is odd", () => {
    let numberOdd = 7;
    const output = `${numberOdd} é um número ímpar`;
    expect(checkEvenNumber(numberOdd)).toEqual(output);
  }),

  test("Should check if is not a number", () => {
    let valorString = 'oi';
    const output = `${valorString} não é um número`;
    expect(checkEvenNumber(valorString)).toEqual(output);
  })
})


//   const output = " é um número par";
// const num = 18;
// expect(checkEvenNumber(num)).toEqual(num + output);
// } )
// 