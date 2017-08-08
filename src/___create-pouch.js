import db from "./index-pouch.js";

var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-upsert'));


var a = [{
        "_id": "notif_1",
        "title": "title of notif 1",
        "body": "Body of notif 1. This is another notification.",
        "viewed": false
    },
    {
        "_id": "notif_2",
        "title": "title of notif 2",
        "body": "Body of notif 2. This is another notification.",
        "viewed": false

    },
    {
        "_id": "notif_3",
        "title": "title of notif 3",
        "body": "Body of notif 3. This is another notification.",
        "viewed": false

    },
    {
        "_id": "notif_6",
        "title": "Super-interesting title of notif 4",
        "body": "Super-interesting body of notif 4. This is another notification.",
        "viewed": false

    }
]


var b = [{
        "_id": "notif_1",
        "title": "title of notif 1",
        "body": "Body of notif 1. This is another notification.",
        "viewed": false
    },
    {
        "_id": "notif_2",
        "title": "title of notif 2",
        "body": "Body of notif 2. This is another notification.",
        "viewed": false

    },
    {
        "_id": "notif_3",
        "title": "title of notif 3",
        "body": "Body of notif 3. This is another notification.",
        "viewed": false

    }
]

// var a = [{ value:"4a55eff3-1e0d-4a81-9105-3ddd7521d642", display:"Jamsheer"}, { value:"644838b3-604d-4899-8b78-09e4799f586f", display:"Muhammed"}, { value:"b6ee537a-375c-45bd-b9d4-4dd84a75041d", display:"Ravi"}, { value:"e97339e1-939d-47ab-974c-1b68c9cfb536", display:"Ajmal"},  { value:"a63a6f77-c637-454e-abf2-dfb9b543af6c", display:"Ryan"}]
// var b = [{ value:"4a55eff3-1e0d-4a81-9105-3ddd7521d642", display:"Jamsheer", $$hashKey:"008"}, { value:"644838b3-604d-4899-8b78-09e4799f586f", display:"Muhammed", $$hashKey:"009"}, { value:"b6ee537a-375c-45bd-b9d4-4dd84a75041d", display:"Ravi", $$hashKey:"00A"}, { value:"e97339e1-939d-47ab-974c-1b68c9cfb536", display:"Ajmal", $$hashKey:"00B"}]

function url(otherArray) {
    return function(current) {
        return otherArray.filter(function(other) {
            return other._id == current._id 

        }).length == 0;
    }
}

var onlyInA = a.filter(url(b));
var onlyInB = b.filter(url(a));

var result = onlyInA.concat(onlyInB);

console.log("result is", result);
console.log("res id", result._id);



// db.put({
//     // "_id": result._id,
//     "title": result.title,
//     "body": result.body,
//     "viewed": false,
// }).then(function(response) {
//     console.log("response posted new pouch", response)
// }).catch(function(err) {
//     console.log(err);
// });



export default url;