const {allKeys, isObject} = require('./checarObjeto');

describe("verify keys", () => {
    it("shold check if paramer is a object", () => {
        const input = {
            "prop1": 1
        };

        expect(isObject(input)).toEqual(true)
    });

    it("shold check if all keys are returned", () => {
        const input = {
            "prop1": 1
        };

        const output = ["prop1"]

        expect(allKeys(input)).toEqual(output);
    });
})