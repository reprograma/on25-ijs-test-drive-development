const jokenpo = require('./jokenpo');

describe("Jokenpo function", () => {
    it("should check if players tie", () => {
        const output = 'Empate!';
        expect(jokenpo('pedra', 'pedra')).toEqual(output);
    });

    it("should check player 2 won", () => {
        const output = 'Jogador 2 venceu!';
        expect(jokenpo('papel', 'tesoura')).toEqual(output);
        expect(jokenpo('tesoura', 'pedra')).toEqual(output);
    });

    it("should check player 1 won", () => {
        const output = 'Jogador 1 venceu!';
        expect(jokenpo('papel', 'pedra')).toEqual(output);
    });
})