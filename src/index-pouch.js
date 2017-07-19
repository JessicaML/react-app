import PouchDB from 'pouchdb';

var db = new PouchDB('sample');

var doc = {
  "_id": "mittens",
  "name": "Mittens",
  "occupation": "kitten",
  "age": 3,
};

db.put(doc);

export default db;

