const {allKeys, isObject} = require("./checarObjeto")

describe("verify keys", () => {
    test("should check if parameter is an object", () => {
        const input = {
            "prop1": 1
        };
        expect(isObject(input)).toEqual(true)
    });

    test("should check if all keys are returned", () => {
        const input = {
            "prop1": 1
        };
        const output = ["prop1"]

        expect(allKeys(input)).toEqual(output);
    })
});