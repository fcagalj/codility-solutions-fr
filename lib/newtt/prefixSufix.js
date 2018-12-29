
'use strict';

exports.solution = solution;


//mocha --grep prefixSufix
//node-debug _mocha --grep prefixSufix

function solution(A) {
  let max = 0;
  console.log('A::: ', A, Math.floor(A.length/2));
  for (let i = 0;i < Math.floor(A.length/2); i++) {

    let prefix = A.slice(0, i + 1);
    let suffix = A.slice(-i - 1);
    console.log('%s::', i);
    console.log('prefix: ', prefix);
    console.log('suffix: ', suffix);

    if(prefix === suffix){
      max = prefix.length;
    }
  }
  return max;
}
