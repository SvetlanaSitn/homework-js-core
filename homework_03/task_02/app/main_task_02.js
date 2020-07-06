let arrayAges = [1, 2, 10, 8];
function oldestAges() {
  let orderAges = arrayAges.sort(function(a, b) { return b - a; });
  let orderedArray = [arrayAges[1], arrayAges[0]];
  return orderedArray;
}
console.log(oldestAges());