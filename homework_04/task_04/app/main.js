//* * map
const fruitsMap = ["Яблоко", "Банан", "Ананас"];
// console.log (fruits.map(fruitsMap=>fruitsMap[0]));
let result = fruitsMap.reduce(function(sum, current) {
    let total = sum + current[0];
    return total;
  }, []);
  console.log(result); 

//* * filter
const fruitsFilter = ['Яблоко', 'Банан', 'Ананас'];
//console.log (fruitsFilter.filter(fruitsFilter=>fruitsFilter[0].toLocaleLowerCase()== 'а'));
let resultFilter = fruitsFilter.reduce(function(total, currentValue, currentIndex) {
//    if (currentValue == 'а')
//    currentIndex++;
//    return total + fruitsFilter[0];
      
  }, []);
  console.log(resultFilter);
