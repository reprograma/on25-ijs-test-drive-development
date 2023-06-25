/* Escreva um teste para uma função que dado um índice (0) e o tamanho do array,
 retorne a Sequência de Fibonacci iniciando no índice e finalizando depois do tamanho
especificado para o array */
const fibonacci = require('./fibonacci');


    describe('testing fibonacci', () => {
         it('should return 1 as the 3rd Fibonacci number', () => {
        expect(fibonacci(3)).toBe(1);
       });
    });

  
       //Fibonacci should return 1 as the 3rd Fibonacci number
       //Expected 2 to be 1.
