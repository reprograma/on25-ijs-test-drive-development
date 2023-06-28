const { allKeys, isObject } = require ("./checarObjeto");

// Primeiro vamos testar apenas se é um objeto
describe("verify allKeys function", () => {
    it("check if parameter is an object", () => {
        const input = { // criamos um objeto para passar como input na função
            "prop1": 1
        }
        expect(isObject(input)).toEqual(true)
    })

    it("should check if all keys are returned", () => { // verifica se está recebendo todas as keys do objeto
        const input = { // input com um objeto
            "prop1": 1
        };

        const output = ["prop1"] // output que é a key (chave) do objeto
        expect(allKeys(input)).toEqual(output)
    })
});