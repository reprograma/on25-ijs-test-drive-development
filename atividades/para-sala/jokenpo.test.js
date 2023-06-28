const jokenpo = require("./jokenpo");

describe("jokenpo function", () => {
    test("should check if players tie", () => {
        const output = "Empate!";

        expect(jokenpo('pedra', 'pedra')).toEqual(output);
    }) 
    test("should check if player 2 wins", () => {
        const ouput = "Jogador 2 venceu!";
        expect(jokenpo('pedra', 'papel')).toEqual(ouput);
        expect(jokenpo('papel', 'tesoura')).toEqual(ouput);
        expect(jokenpo('tesoura', 'pedra')).toEqual(ouput);
    })
    test("should check if player 1 wins", () => {
        const ouput = "Jogador 1 venceu!";
        expect(jokenpo('pedra', 'papel')).toEqual(ouput);
    })
})