/* Escreva um teste para uma função que dado um índice (0) e o tamanho do array,
 retorne a Sequência de Fibonacci iniciando no índice e finalizando depois do tamanho
especificado para o array */
const fibonacci = require('./fibonacci');
describe('Verificy result da position no fibonacci', () => {
    it('Should check result fibonacci', () => {
        expect(fibonacci(4)).toEqual(3);
    });
});