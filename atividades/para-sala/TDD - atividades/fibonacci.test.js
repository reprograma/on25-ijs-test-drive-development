/* Escreva um teste para uma função que dado um índice (0) e o tamanho do array,
 retorne a Sequência de Fibonacci iniciando no índice e finalizando depois do tamanho
especificado para o array */

const fibonacci = require("./fibonacci");

describe("Fibonacci function", () => {
    test("should check fibonacci", () => {
        const output = [8, 13, 21, 34, 55, 89, 144];
        expect(fibonacci(6, 7)).toEqual(output);
    })
})