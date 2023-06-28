const checkEvenNumber = require("./numeroPar") // importamos a função a ser testada

describe("Check even, odd, or not a number", () => { // criamos um teste com o describe, com três testes dentro que correspondem aos cenários da função
    test("Should check if is not a number", () => { 
        let str = "oi"; // vamos testar se não é um número, então é uma variável que chama str que é pra ser uma string e recebe um oi, que não é um número
        const output = `${str} não é um número`;
        expect(checkEvenNumber(str)).toEqual(output);
    });
    test("Should check if the number is even", () => {
        const output = " é um número par" //  fazemos uma const com o resultado (output) que traz a string da função
        expect(checkEvenNumber(18)).toEqual(18 + output) // toEqual é o === e o toBe é ==, ou seja faz diferença o tipo da variável
    });
    test("Should check if the number is odd", () => {
        const output = " é um número ímpar" //  fazemos uma const com o resultado (output) que traz a string da função
        expect(checkEvenNumber(7)).toEqual(7 + output) // toEqual é o === e o toBe é ==, ou seja faz diferença o tipo da variável
    });
});