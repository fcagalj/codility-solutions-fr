// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//exports = module.exports = {};

exports.solution = function (A) {
	
	A.sort(sortNumber);
	var i=0, L= A.length;
	
	//for (var i = 0; i < A.length; i++) {
	while(i<L){
		if (A[i] !== (i+1)){
		   return 0;
		}
		i++;
	}
	return 1;
};
function sortNumber(a,b)
{
  return a - b;
}