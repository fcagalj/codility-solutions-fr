
var expect = require('chai').expect;
var Task = require('../../lib/live_coding_exercises/AllUniqueCharacters.js');

//mocha --grep AllUniqueCharacters
//node-debug _mocha --grep AllUniqueCharacters
describe('Testing AllUniqueCharacters', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = 'abcd';
            var results = Task.solution(A);
            expect(results).to.equal(true);
        });
        it('test case 2  ', function () {
            var A = 'abcdd';
            var results = Task.solution(A);
            expect(results).to.equal(false);
        });
    });
});
