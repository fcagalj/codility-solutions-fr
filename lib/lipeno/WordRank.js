
'use strict';

exports.solution = solution;

/**
 You are given a word as input: "WORD"
 If we generate a list of all “words” (including duplicates) made up of the letters in "WORD" (in this case W, O, R and D),
 in lexicographic order starting with DORW and ending with WROD, what position in the list will be occupied by the word "WORD"?
 If the word occurs more than once, the first position should be returned.
 */

//mocha --grep WordRank
//node-debug _mocha --grep WordRank

function solution(W) {

    var org = W;
    W = W.split('');
    var A = W.slice().sort().join('');

    console.log('A', W);
    var count = 0;
    for (var i = 0;i < W.length; i++) {
        for (var j = i;j < W.length; j++) {
            if(W[i] > W[j]){
                var temp = W[i];
                W[i] = W[j];
                W[j] = temp;
                count++;
            }
        }
    }
    console.log('W === org', W, org);

    return count;
}
