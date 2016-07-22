
var expect = require('chai').expect;
var Task = require('../../lib/ho/ho.js');

//mocha --grep ho
//node-debug _mocha --grep ho

//verify("") -> 1
//verify("before ( middle []) after ") -> 1
//verify(") (") -> 0
//verify("} {") -> 1 //no, this is not a mistake.
//verify("<(   >)") -> 0
//verify("(  [  <>  ()  ]  <>  )") -> 1
//verify("   (      [)") -> 0
describe('Testing ho', function () {
    describe('Final results', function () {
        it('HOLA 1 test case 1  ', function () {
            var A = '';
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
        it('HOLA 1 test case 2  ', function () {
            var A = 'before ( middle []) after ';
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
        it('HOLA 1 test case 3  ', function () {
            var A = ') (';
            var results = Task.solution(A);
            expect(results).to.equal(0);
        });
        it('HOLA 1 test case 4  ', function () {
            var A = '> <';
            var results = Task.solution(A);
            expect(results).to.equal(0);
        });
        it('HOLA 1 test case 5  ', function () {
            var A = '(  [  <>  ()  ]  <>  )';
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
    });
});
