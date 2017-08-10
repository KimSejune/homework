function findDay(x) {
  var today = new Date();
  today.setDate(x);
  var daynames = [('일'), ('월'), ('화'), ('수'), ('목'), ('금'), ('토')];
  return daynames[today.getDay(x)];

}

console.log(findDay(6));

function getDay(n) {
  var daynames = [('일'), ('월'), ('화'), ('수'), ('목'), ('금'), ('토')];
  return daynames[n%7];
}
console.log(getDay(2));