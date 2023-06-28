const jokenpo = require('../jokenpo')

describe("Check the jokenpo function", () => {

    it("should check if the players tie", () => {

        const output = 'Empate!'

        expect(jokenpo('pedra', 'pedra')).toEqual(output)
    })


    it("should check if the 2nd player wins", () => {

        const output = 'Jogador 2 venceu!'

        expect(jokenpo('tesoura', 'pedra')).toEqual(output)
        expect(jokenpo('papel', 'tesoura')).toEqual(output)
        expect(jokenpo('pedra', 'papel')).toEqual(output)

    })

    it("should check if the 1st player wins", () => {

        const output = 'Jogador 1 venceu!'

        expect(jokenpo('pedra', 'tesoura')).toEqual(output)
        expect(jokenpo('tesoura', 'papel')).toEqual(output)
        expect(jokenpo('papel', 'pedra')).toEqual(output)
    })


})

// npm run test -- --coverage para testar a cobertura do teste