const {allKeys, isObject} = require('./checarObjeto');

describe("Verify keys", () => {
    test("Should check is parameter is a object", () => {
        const input = {
            "prop1": 1
        };

        expect(isObject(input)).toEqual(true);
    });

    it("Should check if all key are returned", () => {
        const input = {
            "prop1": 1
        };

        const output = ["prop1"];

        expect(allKeys(input)).toEqual(output);
    });
});