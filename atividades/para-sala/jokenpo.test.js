const jokenpo = require("./jokenpo")

describe('jokenpo function', () => {
    test("should check if players draw", () => {
        const output = 'Empate!'

        expect(jokenpo('pedra', 'pedra')).toEqual(output)
    });

    test("should check if player 2 wins", () => {
        const output = 'Jogador 2 venceu!'

        expect(jokenpo('pedra', 'papel')).toEqual(output)
        expect(jokenpo('papel', 'tesoura')).toEqual(output)
        expect(jokenpo('tesoura', 'pedra')).toEqual(output) // repetir todas as condições do if pra ficar com coverage total
    })

    test("should check if player 1 wins", () => {
        const output = 'Jogador 1 venceu!'

        expect(jokenpo('pedra', 'tesoura')).toEqual(output)
    })
})