<<<<<<< HEAD
const convertCelsiusToFahrenheit = require('./conversorTemp');

describe(" Verify convert function", () => {
    it(" should check conversion to fahrenheit", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140);
=======
const convertCelsiusToFahrenheit = require('.//conversorTemp');

describe("verify temperature convertion from Cº to Fº function", () => {
    it("should verify if the converstion to Fahreheit worked", () => {
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
>>>>>>> 68ea499 (exercicios primeira aula de testes da reprograma)
    })
})