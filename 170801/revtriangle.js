var star1 = ''; // star1 선언
var height; // height 선언

var revtriangle = function (height) {
  // 역삼각형을 만들기 위한 반복문
  for (var i = height; i > 0; i--) { // height이하 0초과까지 i--한다.
    // space를 띄기 위한 반복문
    for (var j = 0; j < height - i; j++) { // 0이상 height-1까지 j++한다.
      star1 += ' '; // star1에 space를 병합선언
    }
    //*를 만들기 위한 반복문
    for (var k = i*2-1; k > 0; k--) { // 0초과 i*2-1까지 k--한다.
      star1 += '*'; // star1에 *를 병합선언
    }
    star1 += '\n'; // star1에 개행을 병합선언
  }
  console.log(star1); //star1을 console에 출력
}

revtriangle(5);
