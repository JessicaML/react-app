 import db from "../index-pouch.js";
const PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-upsert'));


export default function fetchNewNotifs() {

    // let INTERVAL_IN_MS = 1000; // wait 1 second


    setInterval(function() {
    let url = "https://codepen.io/jobs.json";

        fetch(url)
            .then(res => res.json())
            .then(res => {
                console.log("What's crackin'?")
                console.log(res)
                // return out
            }).then(res => {
                             db.putIfNotExists({
                        "_id": "notif_" + "33",
                        "MongoId": res[0].hashid,
                        "title": res[0].title,
                        "body": res[0].description,
                        "viewed": false,
                    })
            }).catch(err => console.error("err", err));
    }, 5000);
}
