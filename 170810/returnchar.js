var arr = ['a', 'b', 'c', 'd', 'e'];

var x = arr.join('');
console.log(x);

function returnchar(arr) {
  var y = '';
  for (var i = 0; i < arr.length; i++) {
     y += arr[i];
  }
  return y;
}
console.log(returnchar(arr));