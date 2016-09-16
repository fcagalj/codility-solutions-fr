
'use strict';

exports.solution = solution;


//mocha --grep FlattenNestedArray
//node-debug _mocha --grep FlattenNestedArray

function solution(A) {
    var res = [];
    flatten(A);
    function flatten(A) {
        A.forEach(function(e){
            if(Array.isArray(e)){
                flatten(e);
            }
            else {
                res.push(e);
            }
        });
    }
    return res;
}

function solution1(A) {

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


function solution2(A) {

    var res = [];
    function flatten(A) {
        A.forEach(function(a){
            if (Array.isArray(a)){
                flatten(a);
            } else {
                res.push(a);
            }
        });
    }

    flatten(A);

    return res;

}
function solution1(A) {

    var res = [];
    A.forEach(function(item){
        //if(typeof item === 'object' && (item.length || item.length === 0)){
        //if(Array.isArray(item)){
        if(item.constructor === Array){
            res = res.concat(_flatenArray(item));
        } else {
            res.push(item);
        }
    });
    return res;
}
