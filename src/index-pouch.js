import PouchDB from 'pouchdb';

var db = new PouchDB('sample');

var doc = {
  "_id": "mittens1",
  "name": "Mittens1",
  "occupation": "kitten1",
  "age": 31,
};

db.put(doc);

var doc = {
  "_id": "mittens2",
  "name": "Mittens2",
  "occupation": "kitten2",
  "age": 32,
};

db.put(doc);

export default db;

