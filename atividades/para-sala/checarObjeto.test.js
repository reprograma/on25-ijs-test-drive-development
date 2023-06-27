const {allKeys, isObject} = require('./checarObjeto');

describe('Verify keys', () => {
    it('check if paramenter is a object', () => {
        const input = {
            "prop1": 1
        };

        expect(isObject(input)).toEqual(true)
    });
    
    it('Should check if all keys are returned', () => {
        const input = {
            "prop1": 1
        };

        const output = ["prop1"];
        expect(allKeys(input)).toEqual(output)
    })
})