const jokenpo = require('./jokenpo')
describe('Verify jokenpo function', () => { 
    it('Should check if player 1 win', () => { 
        expect(jokenpo('pedra', 'tesoura')).toEqual('Jogador 1 venceu!');
    });
    it('Should check if player 2 win', () => {
        expect(jokenpo('pedra', 'papel')).toEqual('Jogador 2 venceu!');
        expect(jokenpo('papel', 'tesoura')).toEqual('Jogador 2 venceu!');
        expect(jokenpo('tesoura', 'pedra')).toEqual('Jogador 2 venceu!'); 
    });  
    it('Should check if draw', () => {
        expect(jokenpo('papel', 'papel')).toEqual('Empate!');
    });
});