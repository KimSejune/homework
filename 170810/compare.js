function Compare(x,y){
  if(x>=y){
    return x;
  }else {
    return y;
  }
}

console.log(Compare(2,1));


var arr = [1,2];
var max = Math.max.apply(null,arr);
console.log(max);