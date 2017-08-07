import db from "./index-pouch.js";

var PouchDB = require('pouchdb');
PouchDB.plugin(require('pouchdb-upsert'));

let url = "https://codepen.io/jobs.json";

fetch(url)
    .then(res => res.json())
    .then(out => {
        db.upsert({
            "_id": "notif_" + "22",
            "title": out.jobs[2].title,
            "body": out.jobs[2].description,
            "viewed": false,
        })
        //     mongoout.filter(arr1Item => !notifs.includes(outItem)); // `[4]`
    })
    .catch(err => console.error(err));

//set timeout (every 60 mins?)

export default url;



// get JSON data

// get notifs data

// compare the two, return any JSON data objects which do 
// not exist in notifs data

// give notif_ id cumulative

// id number = number of pouch docs + 1