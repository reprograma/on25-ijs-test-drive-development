const convertCelsiusToFahrenheit = require('./conversorTemp'); // importando a função

describe("Verify convert function", () => { // describe descreve o que vamos testar
    it("should check conversion to fahrenheit", () => { // it ou test, tanto faz, mas usual ser it pq é mais comum em inglês
        expect(convertCelsiusToFahrenheit(60)).toEqual(140); // o que esperamos: espero que essa função, com a temperatura em celsius 60 o resultado seja igual toEqual 140
    }) 
})