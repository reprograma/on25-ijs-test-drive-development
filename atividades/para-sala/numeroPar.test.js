const checkEvenNumber = require('./numeroPar');
describe('Verify even number ', () => {
    let num_even = 2;
    let num_odd = 3;
    let letter = 'a';
    it('Should check if number is even', () => { 
        expect(checkEvenNumber(num_even)).toEqual(`${num_even} é um número par`);
    });
    it('Should check if number is odd', () => {
        expect(checkEvenNumber(num_odd)).toEqual(`${num_odd} é um número ímpar`);
    });
    it('Should check if number is NaN', () => {
        expect(checkEvenNumber(letter)).toEqual(`${letter} não é um número`);
    });
});