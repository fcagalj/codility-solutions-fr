
var expect = require('chai').expect;
var Task = require('../../lib/live_coding_exercises/CircularPrime.js');

//mocha --grep CircularPrime
//node-debug _mocha --grep CircularPrime
describe('Testing CircularPrime', function () {
    describe('Final resultss', function () {
        it('test case 1  ', function () {
            var N = 20;
            var results = Task.solution(N);
            expect(results).to.equal(7);
        });
        it('test case 2  ', function () {
            var N = 100;
            var results = Task.solution(N);
            expect(results).to.equal(13);
        });
        it('test rotate array  ', function () {
            //1234 -> 4123, 3412, 2341
            var A = [1, 2, 3, 4];
            var results = Task._rotateArray(A);
            expect(results).to.deep.equals([4, 1, 2, 3]);
            results = Task._rotateArray(A);
            expect(results).to.deep.equals([3, 4, 1, 2]);
        });
        it('test is prime  ', function () {
            var A = [2, 3, 5, 7, 11, 13, 17, 19, 31, 71];
            var R = A.forEach(function (b) {
                var r = Task._isPrime(b);
                expect(r).to.equal(true);
            });
        });
    });
    describe('Is Prime', function () {
        it('test primes  ', function () {
            var N = [2, 3, 5, 7, 11, 13, 17, 19, 31, 71];
            N.forEach(function (n) {
                expect(Task._isPrime(n)).to.equal(true);
            });
        });
        it('test not primes  ', function () {
            var N = [4, 6, 10, 18];
            N.forEach(function (n) {
                expect(Task._isPrime(n)).to.equal(false);
            });
        });
    });
});
