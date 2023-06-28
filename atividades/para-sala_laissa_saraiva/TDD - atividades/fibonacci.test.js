/* Escreva um teste para uma função que dado um índice (0) e o tamanho do array,
 retorne a Sequência de Fibonacci iniciando no índice e finalizando depois do tamanho
especificado para o array */

// [1,2,3,5,8]



const fibonacciSeq = require("./fibonacci")
describe("Fibonacci Function", ()=> {
  test("should check fibonati", () => {
    const output = [8, 13, 21, 34, 55, 89, 144]

    expect(fibonacciSeq(6,7)).toEqual(output)
  })
})