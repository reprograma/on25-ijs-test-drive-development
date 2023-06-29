const { allKeys, isObject } = require('./checarObjeto');

describe("Verify keys", () => {
    test("Check if parameter is a object", () => {
        const intput = {
            "prop1": 1
        };

        expect(isObject(intput)).toEqual(true);
    });

    test("Should check if all keys are returned", () => {
        const intput = {
            "prop1": 1
        };
        const output = ["prop1"];

        expect(allKeys(intput)).toEqual(output);
    })
})