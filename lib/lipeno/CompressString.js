'use strict';

exports.solution = solution;

/**
 Implement a method to perform basic string compression using the counts of repeated characters.
 For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string
 would not become smaller than the original string, your method should return the original string.
 */

//mocha --grep CompressString
//node-debug _mocha --grep CompressString

function solution(A) {

    var res = [];
    var arr = A.split('');
    for (var i = 0; i < arr.length - 1; i++) {
        var countUniq = 1;
        res.push(arr[i]);
        while ((arr[i] === arr[i + 1]) && (i < arr.length - 1)) {
            i++;
            countUniq++;
        }
        if (typeof res[res.length - 1] === 'string') {
            res.push(countUniq);
        } else {
            res[res.length - 1] = countUniq;
        }
        countUniq = 0;
    }
    return res.join('');
}
