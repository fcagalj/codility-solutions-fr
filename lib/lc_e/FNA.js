
'use strict';

exports.solution = solution;
exports._flatenArray = _flatenArray;


//mocha --grep FlatNestedArrays
//node-debug _mocha --grep FlatNestedArrays

function solution(A) {

    return [].concat.apply([], A);
}

function _flatenArray(arr) {
    var res = [];
    arr.forEach(function(item){
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