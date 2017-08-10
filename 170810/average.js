function Average(sum, count) {
  this.sum = 0;
  this.count = 0;
}


Average.prototype.add = function (array) {
  array.forEach(function (element) {
    this.sum += element;
    this.count++;
  }, this);
  console.log(arr.sum/arr.count);
};

var arr = new Average();
arr.add([1, 2, 3, 4]);



var arr1 = [1,2,3,4,5]

function Aver(arr1){
  var total = 0;
  for(var i =0; i<arr1.length;i++){
    total += arr1[i];
  }
  return total/arr1.length;
  
}
console.log(Aver(arr1));