export default function returnDiffArrays(a1, a2) {
    function url(otherArray) {
        console.log('otherArray', otherArray)
        return function(current) {
        console.log('current', current)
            return otherArray.filter(function(other) {
                console.log('other', other)
                let pouchDoc = other.doc;
                console.log("pouchDoc.title", pouchDoc.title)        
                return pouchDoc.title == current.title
            }).length == 0;
        }
    }

    var result = a1.filter(url(a2));
    return result;

}
