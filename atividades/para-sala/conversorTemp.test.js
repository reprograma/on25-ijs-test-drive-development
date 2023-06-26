//Primeiro importa a função a ser verificada
const convertCelsiusToFahrenheit = require('./conversorTemp');

describe("Verify convert function", () => {
    //Pode ser test() ou it() dá no mesmo
    it("should check conversion to fahrenheit", () => {
        //O Esperado ao chamar a função e passar uma temperatura especifica
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
    })
})