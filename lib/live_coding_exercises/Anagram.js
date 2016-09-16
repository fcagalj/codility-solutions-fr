'use strict';
var fs = require('fs');
/**

 Devise a function that gets one parameter 'w' and returns all the anagrams for 'w' from the file
 dc.txt.

 "Anagram": An anagram is a type of word play, the result of rearranging the letters of a word or
 phrase to produce a new word or phrase, using all the original letters exactly once; for example
 orchestra can be rearranged into carthorse.

 */
var contents = fs.readFileSync('/Users/fcagalj/SOFT_DEV/JavaScript/codility-solutions-fr/lib/live_coding_exercises/dc.txt').toString();

exports.solution = solution;

//mocha --grep Anagram
//node-debug _mocha --grep Anagram

function solution(w) {
    var content = fs.readFileSync('/Users/fcagalj/SOFT_DEV/JavaScript/codility-solutions-fr/lib/live_coding_exercises/dc.txt').toString();

    var words = content.split('\n');

    var sWords = words.filter(function (word) {
        return word.split('').sort().join('') === w.split('').sort().join('');
    });

    return sWords.length;
}

function solution1(w) {

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
