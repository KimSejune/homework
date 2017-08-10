var n = [1,8,2,1];

var n = n.sort(function(a,b){return a-b;})

console.log(n[n.length-1]);



function nMax(){
  var arr = Array.prototype.slice.call(arguments);
  return Math.max.apply(this,arr);
}

console.log(nMax(1,2,66,2,55));