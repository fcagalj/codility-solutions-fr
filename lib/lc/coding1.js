
'use strict';

exports.solution = solution;


//mocha --grep coding1
//node-debug _mocha --grep coding1

function solution(A) {

    var res = [];
    A.forEach(function(item){
        if(Array.isArray(item)){
            res = res.concat(solution(item));

        } else {
            res.push(item);
        }

    });



    return res;
}
