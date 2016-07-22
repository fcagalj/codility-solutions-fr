
'use strict';

//Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?


exports.solution = solution;


//mocha --grep AUC1
//node-debug _mocha --grep AUC1

function solution(S) {

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
