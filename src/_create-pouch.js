import db from "./index-pouch.js";
import PouchDB from "pouchdb";

let url = "https://codepen.io/jobs.json";

function grabArrays(url) {
	//fetch data from mongo

	fetch(url)
		.then(res => res.json())
		.then(out => {
			console.log("Checkout this JSON! ", out);
		})
		.then(out => {
			let notifs = db.allDocs({
				include_docs: true,
				attachments: true,
				startkey: "notif",
				endkey: "notif\ufff0"
			});

			out.filter(arr1Item => !notifs.includes(outItem)); // `[4]`

		})
		.then( => {
		})
		.catch(err => console.error(err));

	//fetch data from pouch
	db
		.allDocs({
			include_docs: true,
			attachments: true,
			startkey: "notif",
			endkey: "notif\ufff0"
		})
		.then(notifs => {
			console.log("Checkout this! ", notifs);
			return notifs;
		})
		.catch(err => console.log(err));

	// compare mongo data with pouch data
	// console.log('?????', notifs,  out);
}

const itemToCount = grabArrays().then(console.log);

// if any mongo docs have an id number that is NOT found in
// pouch docs with notifs_ in id, then create a new pouch doc

arr1.filter(arr1Item => !arr2.includes(arr1Item)); // `[4]`

// give it an id with "notifs_xxx"

// db.put({
//     "_id": "notif_" + whatev,
//     "mongo_id": newNote.id,
//     "title": newNote.title,
//     "body": newNote.body,
//     "viewed": false,
// })

//set timeout (every 60 mins?)

export default url;
