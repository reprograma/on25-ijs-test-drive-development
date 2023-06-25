const checkEvenNumber = require('./numeroPar');

describe('Testing the Even-Odd Function',()=>{
    it('The function should exist',()=>{
        expect(checkEvenNumber).toBeTruthy()
     })
     it('Should return even on passing an even number',()=>{
        expect(checkEvenNumber(8)).toBe("8 é um número par")
     })
     it('Should return odd on passing an odd number',()=>{
        expect(checkEvenNumber(7)).toBe("7 é um número ímpar")
     })

     it('Should return invalid number error if a non-digit input is passed',()=>{
        
        expect(checkEvenNumber('abc')).toBe("abc não é um número")
    })
  })