import returnDiffArrays from './returnDiffArrays'
import fetchNewNotifs from './fetchNewNotifs'
import db from "../index-pouch.js";


// get pouch data
// console.log('inside create pouch', fetchNewNotifs())
export default function createNewPouchNotif(itemToCount) {
    console.log("does this run?");

    return db
        .allDocs({
            include_docs: true,
            attachments: true,
            startkey: "notif",
            endkey: "notif\ufff0"
        })
        // get JSON data
        .then(res => {
            console.log("does this run 2?", res);
            // console.log(res.rows[0])
            console.log(" or here", );

            const jsonData = fetchNewNotifs()
                .then(res => {
                    console.log("bah", res)
                    console.log("bah", jsonData)


                    const diff = returnDiffArrays([1,2,3],[1,2,3,4]).then(console.log);
                }).catch(err => console.log(err));
            // console.log("jsonData", jsonData)
            // returnDiffArrays(res, jsonData); 
            // console.log("returnDiffArrays");
            // console.log('fetchNewNotifs', );
        })
        // compare 2 arrays

        //insert to pouch
        //    .then(notif => {
        //         db.upsert({
        //             "_id": "notif_" + "22",
        //             "title": notif.title,
        //             "body": notif.description,
        //             "viewed": false,
        //         })      
        // })
        .catch(err => console.log(err));

    // compare 2 arrays


}