import React, { Component } from "react";
import ReactDOM from "react-dom";
import db from "./index-pouch.js";
import styles from "./index.css";
import setUnread from "./setUnread.js";



class Notification extends Component {

  constructor(props) {
    super(props);
    this.state = { notifs: {}, selectedNotificationId: -1 };
  }

  selectNotification(doc) {
    this.setState({ selectedNotificationId: doc._id });
    db
      .get(doc._id)
      .then(function(doc) {
        // selected notification,
        // set the notif doc viewed key to 'true'
        return db.put({
          _id: doc._id,
          _rev: doc._rev,
          title: doc.title,
          body: doc.body,
          viewed: true
        });
      })
      .then(function(response) {
        // count the number of unread notifs and update the notif badge
        
        let unreadItemCount = 0;
        
        console.log('seturead numbers.js', setUnread(unreadItemCount));

      })
      .catch(function(err) {
        console.log("err");
      });
  }
  componentDidMount() {
    db.allDocs({
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

          // var Button = React.createClass({
          //   // ... 
          //   render () {
          //     var btnClass = 'btn';
          //     if (this.state.isPressed) btnClass += ' btn-pressed';
          //     else if (this.state.isHovered) btnClass += ' btn-over';
          //     return <button className={btnClass}>{this.props.label}</button>;
          //   }
          // });


          // if doc.viewed === true, add classname='viewed' to li

          //     if (doc.viewed === true) liClass += {styles.viewed};
          //     else if (doc.viewed === false) liClass += {styles.notViewed};
          //     return <button className={liClass}>{this.props.label}</button>;
          //   }
          // });



            <div onClick={() => this.selectNotification(doc)}>
              {doc.title}
              {this.state.selectedNotificationId == doc._id &&
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
