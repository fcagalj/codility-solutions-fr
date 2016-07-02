'use strict';

exports.solution = solution;
//mocha --grep CodilityFR1
function solution(X, A) {

    var cSame=0;
    var cDiff, currSame=0, currDiff=0;
    var index;
    for(var i=0;i<A.length;i++){
        if(X===A[i]){
            cSame++;
        }
    }

    cDiff = A.length - cSame;

    for(var j=0; j < A.length; j++){
        if(X===A[j]){
            currSame++;
        }
        if(currSame===(cDiff - ((j+1) - currSame))){
            index = j;
            return j + 1;
        }
    }
}
