import db from "./index-pouch.js";

var PouchDB = require("pouchdb");
PouchDB.plugin(require("pouchdb-upsert"));

var a1 = [
	{
		_id: "notif_1",
		title: "title of notif 1",
		body: "Body of notif 1. This is another notification.",
		viewed: false
	},
	{
		_id: "notif_2",
		title: "title of notif 2",
		body: "Body of notif 2. This is another notification.",
		viewed: false
	},
	{
		_id: "notif_3",
		title: "title of notif 3",
		body: "Body of notif 3. This is another notification.",
		viewed: false
	},
	{
		_id: "notif_4",
		title: "title of notif 4",
		body: "Body of notif 3. This is another notification.",
		viewed: false
	}
];

var a2 = [
	{
		_id: "notif_1",
		title: "title of notif 1",
		body: "Body of notif 1. This is another notification.",
		viewed: false
	},
	{
		_id: "notif_2",
		title: "title of notif 2",
		body: "Body of notif 2. This is another notification.",
		viewed: false
	},
	{
		_id: "notif_3",
		title: "title of notif 3",
		body: "Body of notif 3. This is another notification.",
		viewed: false
	}
];

(function url(a1, a2) {
	return new Promise((resolve, reject) => {
	return a1.concat(a2).filter(function(val, index, arr) {
		return arr.indexOf(val) === arr.lastIndexOf(val);
	});
}

var onlyInA = a.filter(comparer(b));
var onlyInB = b.filter(comparer(a));

result = onlyInA.concat(onlyInB);

console
	.log(url(a1, a2)))
	.then(function(response) {
		db.upsert({
			_id: "notif_" + "22",
			title: out.jobs[2].title,
			body: out.jobs[2].description,
			viewed: false
		});
	})
	.catch(function(err) {
		console.log(err);
	});

export default url;
