
var expect = require('chai').expect;
var Task = require('../../lib/lipeno/Chessboard.js');

//mocha --grep Chessboard
//node-debug _mocha --grep Chessboard
describe('Testing Chessboard', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = [];
            var results = Task.solution(6, 5);
            expect().to.true();
            //expect(results).to.deep.equals([]);
        });
    });
});
