
var expect = require('chai').expect;
var Task = require('../../lib/random_exercises/test_func_prog.js');

//mocha --grep test_func_prog
//node-debug _mocha --grep test_func_prog

describe('Testing undefined', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = [];
            var results = Task.solution(A);
            expect(results).to.equal(5);
            //expect(results).to.deep.equals([]);
        });
    });
});
