const {allKeys, isObject} = require('../checarObjeto')

describe("Verify keys", () => {
    it("should check if the parameter is an object", () => {
        const input = {prop1: 1}

        expect(isObject(input)).toEqual(true)

    })

it("should check if all the keys returned",() => {
    const input = {
        "prop1": 1
    };

    const output = ["prop1"]
    expect(allKeys(input)).toEqual(output)
})


})