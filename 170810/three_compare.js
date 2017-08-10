function Compare(x, y, z) {
  if (x >= y && x >= z) {
    return x;
  }else if(y >= x && y>=z){
    return y;
  }else {
    return z;
  }
}

console.log(Compare(2, 11, 8));

var arr = [1,2,3];
var max = Math.max.apply(null,arr);
console.log(max);

function threeMax(a,b,c){
  return Math.max(a,b,c);
}
console.log(threeMax(1,2,3));