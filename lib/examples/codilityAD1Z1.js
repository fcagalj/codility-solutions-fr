'use strict';

exports.solution = solution;
//mocha --grep CodilityFR1
function solution(X, A) {

    var Xcount = 0;
    for(var i = 0; i < A.length; i++){
        if(A[i]==X){
            Xcount++;
        }
    }
    var rest = A.length - Xcount;
    var countL = 0;
    var different = A.length - Xcount;
    for(i = 0; i < A.length; i++){
        if(A[i]==X){
            countL++;
        } else {
            different--;
        }
        if(countL === different){
            return i + 1;
        }
    }


}
