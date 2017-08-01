var star1 = ''; // star1 선언
var height; // height 선언

var triangle = function (height) {
  // 정삼각형을 만들기 위한 반복문
  for (var i = 0; i < height; i++) { // 0부터 height미만까지 i를 1씩 증가하며 반복한다.
    // space를 띄기 위한 반복문
    for (var j = height - (i + 1); j > 0; j--) { // height-(i+1)부터 0초과까지 j를 1씩 감소하며 반복한다.
      star1 += ' '; // star1에 space를 병합선언
    }
    //*를 만들기 위한 반복문
    for (var k = 0; k < i * 2 + 1; k++) { // 0부터 i*2+1미만까지 k를 1씩 증가하여 반복한다.
      star1 += '*'; // star1에 *를 병합선언
    }
    star1 += '\n'; // star1에 개행을 병합선언
  }
  console.log(star1); //star1을 console에 출력
}

triangle(5);

