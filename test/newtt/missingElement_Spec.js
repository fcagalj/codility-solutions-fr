
let expect = require('chai').expect;
let Task = require('../../lib/newtt/missingElement.js');

//mocha --grep missingElement
//node-debug _mocha --grep missingElement
describe('Testing missingElement', function () {
    describe('Final results', function(){
        it('should return  from A = [1,3,6,4,1,2] ', function(){
            let A = [1,3,6,4,1,2];
            let results = Task.solution(A);
            expect(results).to.equal(5);
        });
        it('should return  from A = [-1, -3, 3, 1] ', function(){
            let A = [-1, -3, 3, 1];
            let results = Task.solution(A);
            expect(results).to.equal(2);
        });
        it('should return  from A = [1]', function(){
            let A = [1];
            let results = Task.solution(A);
            expect(results).to.equal(2);
        });
        it('should return  from A = [-1,-2,-3]', function(){
            let A = [-1,-2,-3];
            let results = Task.solution(A);
            expect(results).to.be.equal(1);
        });
        it('should return  from A = [-1000]', function(){
            let A = [-1000];
            let results = Task.solution(A);
            expect(results).to.be.equal(1);
        });
    });
});
