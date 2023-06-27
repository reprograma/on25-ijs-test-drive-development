const { allKeys, isObject } = require('./checarObjeto');

describe("Verify allKeys function", () => {
  test("check if parameter is a object", () => {
    const input = {
      "prop1": 1
    };

    expect(isObject(input)).toEqual(true);
  });

  test("should check if all keys are returned", () => {
    const input = {
      "prop1": 1,
      "prop2": 2,
      "prop3": 3
    };

    const output = ["prop1", "prop2", "prop3"];

    expect(allKeys(input)).toEqual(output);
  });
});