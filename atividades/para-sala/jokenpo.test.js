const jokenpo = require('./jokenpo');

describe("Jokenpo function", () => {
  test("should check if players tie", () => {
    const 
      jogada1 = "pedra",
      jogada2 = "pedra";

    expect(jokenpo(jogada1, jogada2)).toEqual("Empate!");
  })

  test("should check if player 2 wins", () => {
    const output = "Jogador 2 venceu!";

    expect(jokenpo("pedra", "papel")).toEqual(output);
    expect(jokenpo("papel", "tesoura")).toEqual(output);
    expect(jokenpo("tesoura", "pedra")).toEqual(output);
  })

  test("should check if player 1 wins", () => {
    const output = "Jogador 1 venceu!";

    expect(jokenpo("pedra", "tesoura")).toEqual(output);
  })
}) ;