import returnDiffArrays from './returnDiffArrays'
import fetchNewNotifs from './fetchNewNotifs'
import db from "../index-pouch.js";
var PouchDB = require('pouchdb');
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
                    return returnDiffArrays(jsonData.jobs, res.rows) 
                }).then(res => {
                    console.log("jsondata", res)
                    db.put({
                        "_id": "notif_" + "26",
                        "title": res[0].title,
                        "body": res[0].description,
                        "viewed": false,
                    })
                }).catch(err => console.log(err));
        })
    // compare 2 arrays

}