const {allKeys, isObject} = require('./checarObjeto');

describe("verify keys", () => {
    it(" should check if parameter is a object", () => {
        const input = {
            "prop1": 1
        };

        expect(isObject(input)).toEqual(true)

    });

    it("should check if all keys are returned", () => {
        const input = {
            "prop1": 1
        };

        const output = ["prop1"]

        expect(allKeys(input)).toEqual(output);

    })
});