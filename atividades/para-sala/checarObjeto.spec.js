const {allKeys, isObject}= require('./checarObjeto');

describe('testing allKeys and isObject', () => {
    it('should parameter be a object', () => {
    const input ={'prop1': 1}

    expect(isObject(input)).toEqual(true)
    })

    it('should check if all keys are returned', () => {
        const input ={'prop1': 1}

        const output = ['prop1']
    
        expect(allKeys(input)).toEqual(output)
        })
})