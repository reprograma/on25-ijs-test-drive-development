/* Escreva um teste para uma fun��o que dado um �ndice (0) e o tamanho do array,
 retorne a Sequência de Fibonacci iniciando no índice e finalizando depois do tamanho
especificado para o array */

const fibonacciSeq = require('./fibonacci')

describe('Fibonacci function', () => {
    it('should check fibonacci', () => {
        const output = [8, 13, 21, 34, 55, 89, 114];
        
        expect(fibonacciSeq(6, 7)).toEqual();
    });
});