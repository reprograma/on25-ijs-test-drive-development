const { allKeys, isObject} = require('.//checarObjeto')

describe("verify the all keys function", () => {
    it("should verify if the parameter is an object", () => {
        const input = {
            "prop1": 1
        };

        expect(isObject(input)).toEqual(true);
    });

    it("should verify if all keys are returned", () => {
        const input = {
            "prop1": 1
        };

        const output = ["prop1"]

        expect(allKeys(input)).toEqual(output);
    });
})
