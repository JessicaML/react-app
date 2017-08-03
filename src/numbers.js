import React, { Component } from "react";
import db from "./index-pouch.js";
import styles from "./index.css";
import setUnreadCount from "./setUnreadCount.js";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = { notifs: {}, selectedNotificationId: -1 };
  }

  selectNotification(doc) {
    this.setState({ selectedNotificationId: doc._id });
    db
      .get(doc._id)
      .then(doc => db.put({
        ...doc,
        viewed: true
      }))
      .then(function(response) {
        // console.log("before", itemToCount);

        // let itemToCount = 0;

        const itemToCount = setUnreadCount(0).then(count => count);
        // function iExecuteYourCallback(setUnreadCount) {
        //   itemToCount = setUnreadCount(0).then(console.log);
        // }
        // iExecuteYourCallback(function() {
        //   // console.log("Im a callback function!", setUnreadCount(0));
        // });
      })
      .catch(function(err) {
        console.log("err", err);
      });
  }
  componentDidMount() {
    db
      .allDocs({
        include_docs: true,
        attachments: true,
        startkey: "notif",
        endkey: "notif\ufff0"
      })
      .then(notifs => this.setState(() => ({ notifs })))
      .catch(err => console.log(err));
  }

  render() {
    const { notifs } = this.state;
    return (
      <div>
        <h1>hello</h1>
        {notifs.rows &&
          notifs.rows.map(({ doc }) =>


            // if doc.viewed === true, add classname='viewed' to li

            //     if (doc.viewed) liClass += {styles.viewed};
            //     else if (doc.viewed === false) liClass += {styles.not-viewed};
            //   }
            // });

            <div onClick={() => this.selectNotification(doc)} className={doc.viewed ? 'viewed' : 'not-viewed'}>
              {doc.title}
              {this.state.selectedNotificationId === doc._id &&
                <div>
                  {doc.body}
                </div>}
            </div>
          )}
      </div>
    );
  }
}

export default Notification;
