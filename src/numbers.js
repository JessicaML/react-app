import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import db from './index-pouch.js';

class Notification extends Component {
    constructor(props) {
        super(props)
    
        this.state = { results: {} };
    }

      componentDidMount() {
        db.allDocs({
        include_docs: true,
        attachments: true,
        startkey: 'notif',
        endkey: 'notif\ufff0'
      })
        .then(results => this.setState(() => ({ results })))
        .catch(err => console.log(err))  
      }

    render() {
        //const notifs{title, body} = this.state.results
         const notifs = this.state.results
         const notif = JSON.stringify(notifs.rows)

         console.log("numbers render", this.state.results)
         // console.log(notifs.rows)
         console.log("work1?", notifs.rows)
         console.log("work?", notifs[0])

        return (            
            <div>
               {notif}
            </div>
        );
    }

}

export default Notification;
