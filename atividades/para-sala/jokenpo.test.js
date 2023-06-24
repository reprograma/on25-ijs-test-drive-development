<<<<<<< HEAD
const jokenpo = require("./jokenpo")

describe('jokenpo function', () => {
    test("should check if players tie", () => {

        const output = 'Empate!';

        expect(jokenpo('pedra', 'pedra')).toEqual(output);
    })

    test("should check if player 2 wins", () => {
        const output = "Jogador 2 venceu!";

        expect(jokenpo('pedra', 'papel')).toEqual(output)
        expect(jokenpo('papel', 'tesoura')).toEqual(output)
        expect(jokenpo('tesoura', 'pedra')).toEqual(output)
    })

    test("should check if player 1 wins", () => {
        const output = "Jogador 1 venceu!";

        expect(jokenpo('pedra', 'tesoura')).toEqual(output)


    })


=======
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
>>>>>>> 68ea499 (exercicios primeira aula de testes da reprograma)
});