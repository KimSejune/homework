
function Average(n){
  var add = 0;
  for(var i=0; i<n.length; i++){
    add += n[i];
  }
  console.log(add/n.length);
}


var arr = [1,2,3,4,5,6,7,8,9,10];
var n = arr;
Average(n);


function Average2(n2){
  return n2.reduce(function(prev,curv){return prev+curv})/n2.length;
}

var n2 = [1,2,3,4,5];
console.log(Average2(n2));