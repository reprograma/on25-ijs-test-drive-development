const jokenpo = require("./jokenpo");

describe("jokenpo", () => {
  it("should check if is a draw", () => {
    const output = "Empate!";
    expect(jokenpo("papel", "papel")).toEqual(output);
  });

  it("should check if player 2 wins", () => {
    const output = "Jogador 2 venceu!";

    expect(jokenpo("pedra", "papel")).toEqual(output);
  });

  it("should check if player 1 wins", () => {
    const output = "Jogador 1 venceu!";

    expect(jokenpo("papel", "pedra")).toEqual(output);
  });
});
