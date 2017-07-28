import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import db from './index-pouch.js';
import styles from './index.css';

class Notification extends Component {
    constructor(props) {
        super(props)
    
        this.state = { notifs: {}, selectedNotificationId: -1 };
    }

    selectNotification(doc) {
      this.setState({selectedNotificationId: doc._id});
      alert("viewed!!!");
      alert(doc._rev);
      console.log(doc);

      db.get(doc._id).then(function(doc) {
        return db.put({
          _id: doc._id,
          _rev: doc._rev,
          title: doc.title,
          body: doc.body,
          viewed: true
        });
      }).then(function(response) {
        // handle response
          console.log("viewed!!!");
          console.log(doc._id);
          console.log(doc.viewed);

        // update badge
      }).catch(function (err) {
        console.log("err");
      });

    }

      componentDidMount() {
        db.allDocs({
        include_docs: true,
        attachments: true,
        startkey: 'notif',
        endkey: 'notif\ufff0'
      })
        .then(notifs => this.setState(() => ({ notifs })))
        .catch(err => console.log(err))  
      }

    render() {
         const { notifs } = this.state;
         const notif = JSON.stringify(notifs.rows)

        return ( 
            <div>    

              <h1>hello</h1>       
               {notifs.rows && notifs.rows.map(({ doc }) => (
                  
                  <div onClick={()=>this.selectNotification(doc)}> 
                      {doc.title}
                      {this.state.selectedNotificationId == doc._id && <div>
                        
                        {doc.body}
                      </div>}
                  </div>



               ))}
            </div>    
        );
    }
}

export default Notification;
