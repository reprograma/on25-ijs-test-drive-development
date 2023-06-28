const jokenpo = require("./jokenpo")


describe('Jokenpo function ', () => {
    it('should check if players tie', () => {
        const output =  'Empate!'
        expect(jokenpo('pedra', 'pedra')).toEqual(output)
    })

    it('should check if players 2 win', () => {
        const output =  'Jogador 2 venceu!'
        expect(jokenpo('pedra' , 'papel')).toEqual(output)
        expect(jokenpo('papel' , 'tesoura')).toEqual(output)
        expect(jokenpo('tesoura' , 'pedra')).toEqual(output)
    })

    it('should check if players 1 win', () => {
        const output =  'Jogador 1 venceu!'
        expect(jokenpo('pedra' , 'tesoura')).toEqual(output)
    })
})
