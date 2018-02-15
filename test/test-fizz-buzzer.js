//import chai
const expect  = require('chai').expect;

//Import fizzbuzz
const fizzBuzzer = require('../fizzBuzzer');

//unit tests for normal cases
describe('fizzBuzzer' , function(){
    it("returns fizz-buzz for number divisible by 15", function(){
        expect(fizzBuzzer(15)).to.equal("fizz-buzz");
    });
    it("returns buzz for number divisible by 5", function(){
        expect(fizzBuzzer(10)).to.equal("buzz");
    });
    it("returns fizz for number divisible by 3", function(){
        expect(fizzBuzzer(9)).to.equal("fizz");
    });
    it("returns number if not divisible by 3, 5 or 15", function(){
        expect(fizzBuzzer(22)).to.equal(22);
    });
    //invalid input case
    it("should raise an error if input is not a number", function(){
        const invalidInputs = ['3', true, 'foo'];
        invalidInputs.forEach(function(input){
            expect(function(){
                fizzBuzzer(input)
            }).to.throw(Error);
        });
    });
    
})