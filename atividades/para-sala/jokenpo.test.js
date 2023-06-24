const jokenpo = require("./jokenpo");

describe("jokenpo function", () => {
  it("should check if players tie", () => {
    expect(jokenpo("pedra", "pedra")).toEqual("Empate!");
  });
  it("should check if player 2 wins", () => {
    expect(jokenpo("pedra", "papel")).toEqual("Jogador 2 venceu!");
    expect(jokenpo("papel", "tesoura")).toEqual("Jogador 2 venceu!");
    expect(jokenpo("tesoura", "pedra")).toEqual("Jogador 2 venceu!");
  });
  it("should check if player 1 wins", () => {
    expect(jokenpo("pedra", "tesoura")).toEqual("Jogador 1 venceu!");
  });
});
