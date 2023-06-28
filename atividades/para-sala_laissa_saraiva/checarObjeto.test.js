const {allKeys, isObject} = require("./checarObjeto");

describe("Verify Keys", ()=> {
  test("checa se parametro é objeti", ()=> {
    const input = {
      "prop": 1
    }

    expect(isObject(input)).toEqual(true);
  })

  test("checa as chaves", ()=> {
    const input = {
      "prop": 1
    }
    const output = ["prop"]
    expect(allKeys(input)).toEqual(output);
  })
})