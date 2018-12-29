
'use strict';

exports.solution = solution;


//mocha --grep missingElement
//node-debug _mocha --grep missingElement

function solution(A) {

  A = A
    .filter(a => a > 0)
    .sort();

  let map = {};
  A.map(a => {
    map[a] = a;
  });

  A = Object.keys(map).map(k => {
    return map[k];
  });

  if(!A.length){
    return 1;
  }

  console.log('A:: ', A);

  for (let i = 0;i < A.length; i++) {
   if(A[i] + 1 !== A[i + 1]){
     console.log('Returning ', A[i] + 1);
    return A[i] + 1;
   }
  }
}
