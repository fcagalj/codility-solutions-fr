'use strict';
var fs = require('fs');
//
var contents = fs.readFileSync('/Users/fcagalj/SOFT_DEV/JavaScript/codility-solutions-fr/lib/lc_e/dc.txt').toString();

exports.solution = solution;

//mocha --grep Anagram
//node-debug _mocha --grep Anagram

function solution(w) {

    var arr = contents.split('\n');

    var sar = [];

    arr.forEach(function(word){
        var sw = word
            .split('')
            .sort()
            .join('');
        sar.push(sw);
    });

    var res = 0;

    sar.forEach(function(sw){
        console.log('');
        if(sw === w.split('').sort().join('')){
            res++;
        }
    });
    return res;
}
