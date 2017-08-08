import returnDiffArrays from './returnDiffArrays'
import fetchNewNotifs from './fetchNewNotifs'
import db from "../index-pouch.js";

export default function setUnreadCount(itemToCount) {
    // console.log(itemToCount);
   
    return db
      .allDocs({
        include_docs: true,
        attachments: true,
        startkey: "notif",
        endkey: "notif\ufff0"
      })
// get JSON data
   .then(res => {
        const jsonData = fetchNewNotifs(0).then(console.log);
        returnDiffArrays(res, jsonData); 
        console.log("does this run?")
})
//    .then(notif => {
//         db.upsert({
//             "_id": "notif_" + "22",
//             "title": notif.title,
//             "body": notif.description,
//             "viewed": false,
//         })      
// })
        .catch(err => console.log(err));
}



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

// get pouch data


// compare 2 arrays

