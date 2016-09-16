
'use strict';

exports.solution = solution;
/*************************************************************************************************
 AllUniqueCharacters
 Implement an algorithm to determine if a string has all unique characters.
 What if you cannot use additional data structures?

 */

//mocha --grep AllUniqueCharacters
//node-debug _mocha --grep AllUniqueCharacters

function solution(S) {

    var sorted = S.split('').sort();

    for (var i = 1;i < sorted.length; i++) {
        if(sorted[i - 1] === sorted[i]){
            return false;
        }
    }

    return true;
}

function solution1(S) {

    S = S.split('');

    var ob = {};
    S.forEach(function(l){
        ob[l] = ob[l] ? ob[l] + 1 : 1;
    });

    console.log('ob: ', ob);
    for (var p in ob) {
        if(ob[p] > 1){
            return false;
        }
    }

    return true;
}
