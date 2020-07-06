let arr = [
    [3, 2, 1, 4, 5],       // minimum value of row is 1
    [8, 6, 7, 5, 9],       // minimum value of row is 5
    [34, 21, 19, 56, 100]  // minimum value of row is 19
  ];

  function compareNum(a, b) {
    return a - b;
  }

  function sumArray() {
    let result = [];
    result.forEach(row => row.sort(compareNum));
    for ( let i = 0, length = result.length, sum = 0; i < length; i++ ) {
    sum += result[i];
    return sum;
    }
  }
  console.log(sumArray(arr));

/* function sumArray() {
    arr.forEach(row => row.sort(compareNum));
  for ( let i = 0, length = arr.length, sum = 0; i < length; i++ ) {
    sum += arr[i];
    return sum;
    }
  } */
