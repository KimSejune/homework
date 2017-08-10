var n = ['1', '2', '3', '4'];
console.log(n.reverse());
console.log(n); // 기존 문자열도 변경된다.


function returnchar(arr) {
  // var y = '';
  // for (var i = arr.length-1; i >= 0; i--) {
  //    y += arr[i];
  // }
  // return y;
  return arr.split('').reverse().join('');
}
console.log(returnchar('안녕ㅁㄴㅇㅁㄴㅇ'));

