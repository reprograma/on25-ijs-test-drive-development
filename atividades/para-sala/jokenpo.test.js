const jokenpo = require(".//jokenpo")

describe('jokenpo function is working', () => {
    it("should verify if the players tied", () => {
        const output = 'Empate!';
        expect(jokenpo('pedra', 'pedra')).toEqual(output);
    });

    it("should verify if player 2 won", () => {
        const output = "Jogador 2 venceu!";
        expect(jokenpo('pedra', 'papel')).toEqual(output);
        expect(jokenpo('papel', 'tesoura')).toEqual(output);
        expect(jokenpo('tesoura', 'pedra')).toEqual(output);
    });

    it("should verify if player 1 won", () => {
        const output = "Jogador 1 venceu!";
        expect(jokenpo('pedra', 'tesoura')).toEqual(output);
    })
});