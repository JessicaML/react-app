import db from "./index-pouch.js";
import PouchDB from "pouchdb";
PouchDB.plugin(require('pouchdb-find'));

export default function setUnreadCount(itemToCount) {
    db.createIndex({
      index: {fields: ['viewed']}
    }).then(function () {
      return db.find({
        selector: {viewed: {$eq: false}}
      });
    });


            
}
