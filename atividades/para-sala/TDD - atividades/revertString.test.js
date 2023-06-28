const reverse = require("./reverseString");

describe("RevertString function", () => {
  test("'casa' => 'asac'", () => {
    expect(reverse("casa")).toEqual("asac");
  });

  test("'javascript' => 'tpircsavaj'", () => {
    expect(reverse("javascript")).toEqual("tpircsavaj");
  });
});
