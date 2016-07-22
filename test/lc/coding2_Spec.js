
var expect = require('chai').expect;
var Task = require('../../lib/lc/coding2.js');

//mocha --grep coding2
//node-debug _mocha --grep coding2
describe('Testing coding2', function () {
    describe('Final results', function () {
        it('test case 1  ', function () {
            var A = ["9C","KS","AC","AH","8D","4C","KD","JC","7D","9D","2H","7C","3C","7S","5C","6H","TH","7H","QD","9S","KC","2D","4D","9H","4S","8H","3H","3S","5S","6S","TD","5H","8S","4H","6D","JD","TC","AD","JS","2C","5D","JH","QH","3D","KH","8C","TS","6C","QC","QS"];
            var results = Task.solution(A);
            expect(results).to.equal(0);
        });
        it('test case 2  ', function () {
            var A = ["QC","6D","KD","QS","7S","5C","QH","3H","AD","9C","7H","QD","QH","2S","AH","KS","5D","QC","AS","2D","6C","8C","7D","8H","9S","4D","6H","JC","3S","4C","3C","7S","KD","4H","5C","7C","AS","3D","7D","2H","8S","2H","8D","9S","3C","5H","KS","8D","9H","TH","2C","JH","6D","KC","TS","6S","TD","4S","8S","5S","8H","TD","9D","4H","6C","7C","AC","JC","JD","TS","KH","2C","QD","JS","QS","KH","8C","3H","2D","2S","3S","5H","4S","9C","4D","6H","JS","TH","9H","TC","7H","JH","TC","6S","AD","AC","JD","4C","5D","9D","KC","3D"];
            var results = Task.solution(A);
            expect(results).to.equal(1);
        });
        it('test case 3  ', function () {
            var A = ["2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH", "2S", "2C", "2D", "2H", "3S", "3C", "3D", "3H", "4S", "4C", "4D", "4H", "5S", "5C", "5D", "5H", "6S", "6C", "6D", "6H", "7S", "7C", "7D", "7H", "8S", "8C", "8D", "8H", "9S", "9C", "9D", "9H", "TS", "TC", "TD", "TH", "JS", "JC", "JD", "JH", "QS", "QC", "QD", "QH", "KS", "KC", "KD", "KH", "AS", "AC", "AD", "AH"];
            var results = Task.solution(A);
            expect(results).to.equal(3);
        });
    });
});
