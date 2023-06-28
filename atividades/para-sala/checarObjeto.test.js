const{ allKeys, isObject} = require("./checarObjeto")

describe('verify keys', () => {
    it('check if parameter  is a obj', () => {
        const input = {'prop1': 1 }
         expect(isObject(input)).toEqual(true)
    })
    it('should check if all keys are returned', () => {
        const input = {'chave': 1 }
        const output = ['chave']
        expect(allKeys(input)).toEqual(output)
    })
    
})