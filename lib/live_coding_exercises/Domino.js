'use strict';
var fs = require('fs');

exports.solution = solution;

// Domino plates are given as array (lines in txt file). The task is to find longest array that enabling

//mocha --grep Domino
//node-debug _mocha --grep Domino

function solution(fileName) {

  let input = fs.readFileSync(fileName).toString();
  let lines = input.split('\n');
  let res = [];
  lines.forEach(line => {
    let tiles = line.split(',');
    let count = 1, maxCount = 1;

    for (let i = 0; i < tiles.length; i++) {
      while (i < tiles.length - 1 && tiles[i].split('-')[1] === tiles[i + 1].split('-')[0]) {
        count++;
        i++;
        if (count >= maxCount) {
          maxCount = count;
        }
      }
      count = 1;
    }
    res.push(maxCount);
  });
  return res;
}


function solutionOrginal(fileName) {

  var input = fs.readFileSync(fileName).toString();
  var lines = input.split('\n');

  console.log('', input);

  var res = [];
  lines.forEach((line, i) => {

    console.log('line: %s, %s', i, line);

    var tiles = line.split(',');
    var count = 1, maxCount = 1;
    for (var i = 1; i < tiles.length; i++) {
      var first = tiles[i - 1].split('-');
      var second = tiles[i].split('-');
      console.log('f:', first, first[1]);
      console.log('s', second, second[0]);
      if (first[1] === second[0]) {
        maxCount = Math.max(count, maxCount);
        count++;
      } else {
        count = 1;
      }
      console.log('count', count);
    }
    res.push(maxCount);
  });

  console.log('res: ', res);

  return res;
}
