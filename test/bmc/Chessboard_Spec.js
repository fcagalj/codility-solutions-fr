
var expect = require('chai').expect;
var Task = require('../../lib/bmc/Chessboard.js');

//mocha --grep Chessboard
//node-debug _mocha --grep Chessboard
describe('Testing Chessboard', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var N = 7, M = 4;
            var results = Task.solution(N, M);
            //expect(results).to.equal(5);
            expect(results).to.deep.equals(['0','1','0','1','0','1','0', '\n',
                                            '1','0','1','0','1','0','1', '\n',
                                            '0','1','0','1','0','1','0', '\n',
                                            '1','0','1','0','1','0','1', '\n']);
        });
    });
});
