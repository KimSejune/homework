// 20. 최단 거리 1차원 점의 쌍 구하기 (DAUM)
// 1 차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들) 의 
// 쌍을 배열로 반환하는 함수를 작성하라.(단 점들의 배열은 모두 정렬되어있다고 가정한다.) 
// 예를들어[1, 3, 4, 8, 13, 17, 20, 23, 24] 이 주어졌다면, 
// 결과값은[[3, 4], [23, 24]] 가 될 것이다.

function findMinDistance(array) {
  var store = []; // 차이값 저장을 위한 배열 선언
  var sub = 0; // value값의 차이를 전달하기위한 number 선언

  array.reduce(function (previousValue, currentValue) {
    sub = currentValue - previousValue; // sub에 전달한 차이값 저장
    store.push(sub); // sub에 저장된 차이값을 store에 push
    return currentValue; // currentValue이 previousvalue값으로 return된다.
  });

  var min = Math.min.apply(null, store); // 차이값의 min값을 var min에 저장

  var str = []; // 차이값이 가장작은 2개의 수를 새로운 배열로 저장
  var store2 = [];  // 새로운 배열들을 push
  
  for (var i = 0; i < store.length; i++) {  // store의 길이 만큼 for문을 실행한다.
    if (min == store[i]) {  // min값과 일치하면 아래 코드 실행한다.
      str = new Array(array[i], array[i + 1]);  // str에 차이값이 min인 2개의 값배열 저장
      store2.push(str); // store2에 push
    }
  }

  return store2;  // 값을 return

}

var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]