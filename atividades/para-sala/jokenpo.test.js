const jokenpo = require("./jokenpo");

describe('jokenpo function', ()=> {
    it('should check if players tie', () => {
        const output = "Empate!";
        expect(jokenpo('pedra', 'pedra')).toEqual(output);
    })

    it('should check if players 2 wins', () => {
        const output = "Jogador 2 venceu!";
        expect(jokenpo('pedra', 'papel')).toEqual(output);
        expect(jokenpo('papel', 'tesoura')).toEqual(output);
        expect(jokenpo('tesoura', 'pedra')).toEqual(output);
    })
})