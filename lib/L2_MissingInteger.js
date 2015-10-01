'use strict';
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
exports = module.exports = {};


exports.solution = function (A) {
	A = this.sortUniquePositive(A);
    if ((A.length===0)||!A){
    	return 1;
    }
	for(var i=0, L=A.length;i<L;i++){
		if(A[i]!==i+1){
			return (i+1);
		}
	}
	return (A[L-1]+1);
};

exports.sortUniquePositive = function (arr) {
    arr = arr.sort(function (a, b) { return a - b; });
    var positive = [];
    for (var j = 0; j < arr.length; j++) {
    	if(arr[j]>0){
    		positive.push(arr[j]);
    	}
    }
    if ((positive.length===0)||!positive){
    	return [];
    }
    var unique = [positive[0]];
    for (var i = 1; i < positive.length; i++) { // start loop at 1 as element 0 can never be a duplicate
        if (positive[i-1] !== positive[i]) {
			unique.push(positive[i]);
		}
    }
    return unique;
};