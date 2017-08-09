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
        // get JSON dataz
        .then(res => {
            console.log("pouch notifs:", res);
            // console.log(res.rows[0])
            const jsonData = fetchNewNotifs()
                .then(jsonData => {
                    console.log("bah res", res.rows)
                    let pouchNotifs = res.rows
                    console.log("bah jsonData", jsonData.jobs)
                    let mongoNotifs = jsonData.jobs
                    console.log("a", mongoNotifs)
                    console.log("b", pouchNotifs)

                    const diff = returnDiffArrays(pouchNotifs, mongoNotifs).then(console.log);

                    // res["rows2"] = jsonData;
                }).then(res => {
                    console.log("jsondata", res)
                    // }).then(res => {


                    // push jsonData onto 
                    // const diff = returnDiffArrays([1,2,3,4], [1,2,3]).then(console.log);
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