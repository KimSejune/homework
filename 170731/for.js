for (var a = 0; a < 10; a += 2) {
  console.log(a); // a에다가 2씩 증가하는 값을 만들어서 짝수를 출력한다.
}
console.log('\n'); // 개행.

var result = ''; // result에 string값을 저장한다.
for (var b = 0; b < 10; b += 2) { // b에다가 2씩 증가하는 값을 만들어서 짝수를 출력한다.
  result += b; // result에다가 b를 string값으로 저장한다.
}
console.log(result); // 저장한 b값들을 출력한다.
console.log('\n'); // 개행.

for (var c = 9; c > 0; c -= 2) { // 홀수 9부터 출력하기 위해서 c=9를 넣는다. 그뒤에 2씩 줄여서 홀수를 출력한다.
  console.log(c); // c를 출력한다.
}
console.log('\n'); // 개행

var d = -1; // d 선언 및 초기화 -1 + 2 한 값이 초기값
while (d < 8) { // d 값이 < 8보다 작을때까지 2씩증가
  d += 2; // 2씩 증가
  console.log(d); // 출력
}
console.log('\n'); // 개행

var e = 11; // e 선언 및 초기화 11 -2 한 값이 초기값
while (e > 1) { // e > 1보다 클때까지 2씩 감소
  e -= 2; // 2씩 감소
  console.log(e); // 출력
}
console.log('\n'); // 개행

var result = ''; // result에 string 선언 및 초기화
for (var i = 1; i <= 5; i++) { // i값이 5이하이면 1씩 증가시킨다.
  for (var j = 0; j < i; j++) { // j값이 i미만이면 1씩 증가시킨다.
    j = '*'; // j에다가 * string을 추가한다.
    result += j; // result에다가 j를 추가한다.
  }
  console.log(result); // result 값을 출력한다,
}
console.log('\n'); // 개행

var result = ''; // result에 string 선언 및 초기화
for (var i = 1; i <= 3; i++) { // i값이 3이하이면 1씩 증가시킨다.
  for (var j = 0; j < i; j++) { // j값이 i미만이면 1씩 증가시킨다.
    j = '*'; // j에다가 * string을 추가한다.
    result += j; // result에다가 j를 추가한다.
  }
  console.log(result); // result 값을 출력한다,
}
var result = ''; // result에 string 선언 및 초기화
for (var i = 1; i <= 5; i++) { // i값이 5이하이면 1씩 증가시킨다.
  for (var j = 0; j < i; j++) { // j값이 i미만이면 1씩 증가시킨다.
    j = '*'; // j에다가 * string을 추가한다.
    result += j; // result에다가 j를 추가한다.
  }
  console.log(result); // result 값을 출력한다,
}
console.log('\n');

for (i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log('\n');

var result = '';

for (var i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    result += i;
  }
}
console.log(result);
console.log('\n');

for (var i = 9; i > 0; i--) { //i값이 9부터 0까지 loop를 한다.
  if (i % 2 === 1) {
    console.log(i);
  }
}
console.log('\n');

// i=0 ~ 10까지 1씩 증가시킨다.
var i = 0;
while (i < 10) {
  if (i % 2 === 0) { // 나머지가 0이면 내부명령실행
    console.log(i);
  }
  i++;
}
console.log('\n');

// i=9 ~ 0까지 1식 감소시킨다.
var i = 9;

while (i > 0) {
  if (i % 2 === 1) {
    console.log(i);
  }
  i--;
}
console.log('\n');


var result = '';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i + 1; j++) {
    result += '*';
  }
  result += '\n';
}
console.log(result);
