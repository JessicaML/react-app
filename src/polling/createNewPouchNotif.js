import returnDiffArrays from './returnDiffArrays'
import fetchNewNotifs from './fetchNewNotifs'
import db from "../index-pouch.js";
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-upsert'));


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
        .then(res => {
            const jsonData = fetchNewNotifs()
                .then(jsonData => {
                    console.log(jsonData.jobs, res.rows)
                    let pouchNotifs = res.rows
                    return returnDiffArrays(jsonData.jobs, pouchNotifs) 
                }).then(res => {
                    console.log("jsondata", res)
                    console.log("jsondata", res[1].title)
                    db.putIfNotExists({
                        "_id": "notif_" + res[1].hashid,
                        "title": res[1].title,
                        "body": res[1].description,
                        "viewed": false,
                    })
                }).catch(err => console.log(err));
        })
    // compare 2 arrays

}