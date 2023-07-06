<<<<<<< HEAD
const {allKeys, isObject} = require('./checarObjeto');
=======
const { allKeys, isObject } = require('./checarObjeto');
>>>>>>> 67e3fb4f323fefb153fdbb721c71526b4a58deb2

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
<<<<<<< HEAD
});
=======
});
>>>>>>> 67e3fb4f323fefb153fdbb721c71526b4a58deb2
