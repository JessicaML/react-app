export default function returnDiffArrays(a1, a2) {

  var a2 = [1,2, 3]
  var a1 = [1,2, 3, 4]

    var result = [];
    for (var i = 0; i < a1.length; i++) {
        if (a2.indexOf(a1[i]) === -1) {
            result.push(a1[i]);
        }
    }
    console.log("does this work mate?", result)
    return result;
}




