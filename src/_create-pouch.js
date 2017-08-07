import db from "./index-pouch.js";
import PouchDB from "pouchdb";

let url = "https://codepen.io/jobs.json";
			console.log("Cvhjgkl ");

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


		})
		.catch(err => console.error("err", err));
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
		.catch(err => console.log("err", err));



// const itemToCount = grabArrays(url).then(console.log);

export default url;

// get JSON data

// get notifs

// => IMPORT FROM EXT. MODULES 

// compare arrays

// return 


// insert to pouch

// id shit

