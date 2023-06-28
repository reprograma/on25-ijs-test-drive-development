/* Escreva um teste para uma função que dado um índice (0) e o tamanho do array,
 retorne a Sequência de Fibonacci iniciando no índice e finalizando depois do tamanho
especificado para o array */

// Fibonacci é isso = [1, 2, 3, 5, 8] soma os dois últimos números e por aí vai dentro do  array
const fibonacciSeq = require("./fibonacci")

describe("fibonacci function", () => {
    test("should check fibonacci", () => {
        const output = [8, 13, 21, 34, 55, 89, 144]

        expect(fibonacciSeq(6, 7)).toEqual(output);
    });
})