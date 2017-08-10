export default function returnDiffArrays(a1, a2) {
    function url(otherArray) {
        return function(current) {
            return otherArray.filter(function(other) {
                let pouchDoc = other.doc;
                return pouchDoc.title == current.title
            }).length == 0;
        }
    }

    var result = a1.filter(url(a2));
    return result;

}
