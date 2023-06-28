const { allKeys, isObject } = require("./checarObjeto");

describe("verify keys", () => {
  const input = { carro: "corola", aviao: "jato" };

  it("should check if parameter is a object", () => {
    expect(isObject(input)).toEqual(true);
  });
  it("shuld obitain keys", () => {
    const output = ["carro", "aviao"];

    expect(allKeys(input)).toEqual(output);
  });
});
