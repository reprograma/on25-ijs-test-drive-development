const converteCelsiusToFahrenhit = require('./conversorTemp');
describe('Verify convert function', () => {
    it('Should check conversion to fahrenheit', () => { //Quanto mais descritivos melhor.
        expect(converteCelsiusToFahrenhit(60)).toEqual(100);
    }); 
});