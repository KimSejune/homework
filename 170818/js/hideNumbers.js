// 핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 ‘*’으로 바꿔야 한다.
// 전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
// 예를들어 s가 ‘01033334444’면 ‘*******4444’를 리턴하고, ‘027778888’인 경우는 ‘*****8888’을 리턴한다.

function hideNumbers(str) {
  // 반환값을 받을 restr선언
  var restr = [];
  // str.length까지 for문
  for (var i = 0; i < str.length; i++) {
    // str.length-4 보다 i값이 작다면 restr에'*'를 추가
    if (i < str.length - 4) {
      restr += '*';
    } // 크다면 i값에 원래 문자열 추가. 
    else { 
      restr += str[i];
    }
  }
  // restr 반환
  return restr;


}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888