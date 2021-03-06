import db from "./index-pouch.js";
import PouchDB from "pouchdb";

export default function setUnreadCount(itemToCount) {
    console.log(itemToCount);
   
    return db
        .allDocs({
            include_docs: true,
            attachments: true,
            startkey: "notif",
            endkey: "notif\ufff0"
        })
        .then(function(response) {
            // handle response

            console.log('resp', response);
            let viewedNotifs = response.rows;

            // loop through them, if viewed is set to true, add to unread notifs counter

            viewedNotifs.forEach(function(element) {
                // console.log(element.doc.viewed);
                if (element.doc.viewed === true) {
                    itemToCount = itemToCount + 1;
                }
                // console.log("inside foreach", itemToCount);

                return itemToCount;
            });

            // console.log("outside foreach", itemToCount);

            return itemToCount;
        })
        .catch(function(err) {
            console.log("err", err);
        });
}
