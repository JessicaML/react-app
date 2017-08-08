export default function returnDiffArrays(array1, array2, compareField) {
 function filterByDifference(array1, array2, compareField) {
  var onlyInA = differenceInFirstArray(array1, array2, compareField);
  var onlyInb = differenceInFirstArray(array2, array1, compareField);
  var result = onlyInA.concat(onlyInb);
  console.log("hai", result);
  return result;
}

function differenceInFirstArray(array1, array2, compareField) {
  return array1.filter(function (current) {
    return array2.filter(function (current_b) {
        return current_b[compareField] === current[compareField];
      }).length == 0;
  });


}}

