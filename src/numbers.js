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
         var revs =[];
         var docs =[];
         console.log("numbers render", this.state.results)
         var obj = notifs.rows;
         for(var prop in obj) {
            console.log (obj, prop, obj[prop].value.rev)
            revs.push (obj[prop].value.rev)
            docs.push (obj[prop].doc)
   
        }

         console.log("Revs", revs);
         console.log("Docs", docs);

        return (            
            <div>
               {notif}
            </div>
        );
    }

}

export default Notification;
