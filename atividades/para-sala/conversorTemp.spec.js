const convertCelsiusToFahrenheit = require('./conversorTemp');

describe('Verify fuction conversorTemp', ()=> {
    it('should celsius converter to fahrenheit correct', () =>{
        expect(convertCelsiusToFahrenheit(60)).toEqual(140)
    })

    it('should celsius converter to fahrenheit incorrect', () =>{
        expect(convertCelsiusToFahrenheit(60)).not.toEqual(40)
    })
})