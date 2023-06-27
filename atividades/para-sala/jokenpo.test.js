const jokenpo = require('./jokenpo')

describe("jokenpo function", () => {
    it(" should check if the game is a tie", () => {
        let jogada1 = "tesoura"
        let jogada2 = "tesoura"
        let output = 'Empate!'

        expect(jokenpo(jogada1, jogada2)).toEqual(output)
    })

    it(" should have player 1 as winner", () => {
        let output = 'Jogador 1 venceu!'
        expect(jokenpo("tesoura", "papel")).toEqual(output)
        expect(jokenpo("papel", "pedra")).toEqual(output)
        expect(jokenpo("pedra", "tesoura")).toEqual(output)
    })

    it(" should have player 2 as winner", () => {
        let jogada1 = "papel"
        let jogada2 = "tesoura"
        let output = 'Jogador 2 venceu!'
    })


})