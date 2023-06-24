<<<<<<< HEAD
const { allKeys, isObject } = require('./checarObjeto');

describe("verify keys", () => {
    it(" should check if parameter is a object", () => {
=======
const { allKeys, isObject} = require('.//checarObjeto')

describe("verify the all keys function", () => {
    it("should verify if the parameter is an object", () => {
>>>>>>> 68ea499 (exercicios primeira aula de testes da reprograma)
        const input = {
            "prop1": 1
        };

<<<<<<< HEAD
        expect(isObject(input)).toEqual(true)

    });

    it("should check if all keys are returned", () => {
=======
        expect(isObject(input)).toEqual(true);
    });

    it("should verify if all keys are returned", () => {
>>>>>>> 68ea499 (exercicios primeira aula de testes da reprograma)
        const input = {
            "prop1": 1
        };

        const output = ["prop1"]

        expect(allKeys(input)).toEqual(output);
<<<<<<< HEAD

    })
});
=======
    });
})
>>>>>>> 68ea499 (exercicios primeira aula de testes da reprograma)
