
const expect = require('chai').expect;
const Task = require('../../lib/cc/najkracaSec.js');

//mocha --grep najkracaSec
//node-debug _mocha --grep najkracaSec
describe('Testing najkracaSec', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            let A = -11;
            const results = Task.solution(A);
            expect(results).to.equal('LLRL');
        });
    });
});
