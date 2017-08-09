export default function returnDiffArrays(a1, a2) {
// let pouchDoc = a2.doc 
    function url(otherArray) {
        return function(current) {
            console.log("current.doc", current.doc)
            let pouchDoc = current.doc;
            return otherArray.filter(function(other, pouchDoc) {
                // console.log("other.title", other.title)
                console.log("pouchDoc", current.doc)
                
                return other.title == current.title
            }).length == 0;
        }
    }

    var onlyInA = a1.filter(url(a2));
    var onlyInB = a2.filter(url(a1));

    var result = onlyInA.concat(onlyInB);

    // console.log("result is", result);
    // console.log("res title", result[0].title);
    return result;

}


