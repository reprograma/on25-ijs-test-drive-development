/* Escreva um teste para uma função que dado um í­ndice (0) e o tamanho do array,
 retorne a SequÃªncia de Fibonacci iniciando no Ã­ndice e finalizando depois do tamanho
especificado para o array */

const fibonacciSeq = require('./fibonacci')

describe('Fibonacci function', () => {
    it('should check fibonacci', () => {
        const output = [8, 13, 21, 34, 55, 89, 114];
        
        expect(fibonacciSeq(6, 7)).toEqual();
    });
});