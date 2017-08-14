// 1. Check Palindrom
// palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 
// 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 
// 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 
// Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을
// 인자로 전달한다.

function checkPalindrom(str) {

  var str = Array.prototype.slice.call(str);  // str객체를 str배열로 변경
  var str2 = Array.prototype.slice.call(str); //  str객체를 str2배열로 변경
  var str2 = str2.reverse();  // str2배열을 거꾸로 변경
  
  var leftstr = []; // str배열을 저장할 빈배열 생성
  var rightstr = [];  //  str2배열을 저장할 빈배열 생성

  for (var i = 0; i < str.length; i++) {
    leftstr += str[i];  //  leftstr배열에 순차적으로 값저장
    rightstr += str2[i];  //  rightstr배열에 순차적으로 값저장
  }
  if (leftstr === rightstr && leftstr.length != 1) { // 2개의 배열이 같고 길이값이 1이 아니라면 true 반환
    return true;
  } else {
    return false; // 위의 조건에 적합하지 않으면 false반환
  }

}

console.log(checkPalindrom('dad'));
console.log(checkPalindrom('mom'));
console.log(checkPalindrom('palindrom'));
console.log(checkPalindrom('s'));
console.log(checkPalindrom('syys'));