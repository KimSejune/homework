var str = '234asdasd';

// var regexr = /^[A-Za-z0-9]{8,20}$/

// console.log(regexr.test(str));

function password(str) {
  var regexr = /^[A-Za-z0-9]{8,20}$/
  
  console.log(str.length);
  if (str.match(regexr)) {
    return true;
  } else {
    return false;
  }
}

console.log(password(str));