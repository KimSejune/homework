// waterMelon 함수는 정수 n을 매개변수로 입력받는다.
// 길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

// 예를들어 n이 4이면 ‘수박수박‘을 리턴하고 3이라면 ‘수박수‘를 리턴한다.

function waterMelon(n) {
  // 반환할 문자열 선언
  var water = [];

  // n 의 크기만큼 for문 실행
  for( var i=0; i<n; i++){
    // i%2의 나머지가 0이라면 water에 '수'를 붙인다.
    if(i%2 == 0){
      water += '수';
    } // 아니라면 water에 '박'를 붙인다.
    else{
      water += '박';
    }
  }
  // water를 반환한다.
  return water;
}

console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));