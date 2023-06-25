const jokenpo = require('./jokenpo');

describe('testing jakenpo play', () => {
    it('should players tie', () => {
        expect(jokenpo(1, 1)).toBe('Empate!')
    });

    it('should players tie', () => {
        expect(jokenpo('pedra', 'pedra')).toBe('Empate!')
    });
    it('should player 2 wins', () => {
        expect(jokenpo('papel', 'tesoura')).toBe('Jogador 2 venceu!')
    });

    it('should player 2 wins', () => {
        expect(jokenpo('tesoura', 'pedra')).toBe('Jogador 2 venceu!')
    });

    it('should player 2 wins', () => {
        expect(jokenpo('pedra', 'papel')).toBe('Jogador 2 venceu!')
    });

    it('should player 1 wins', () => {
        expect(jokenpo('pedra', 'tesoura')).toBe('Jogador 1 venceu!')
    });
})