//Primeiro importa a fun��o a ser verificada
const convertCelsiusToFahrenheit = require('./conversorTemp');

describe("Verify convert function", () => {
    //Pode ser test() ou it() d� no mesmo
    it("should check conversion to fahrenheit", () => {
        //O Esperado ao chamar a fun��o e passar uma temperatura especifica
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
    })
})