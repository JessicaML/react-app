import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import db from './index-pouch.js';

const ListItem = ({ title, body }) => <li>{title}: <span>{body}</span></li>;

class Notification extends Component {
    constructor(props) {
        super(props)
    
        this.state = { notifs: {} };
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
        //const notifs{title, body} = this.state.results
         const { notifs } = this.state;
         const notif = JSON.stringify(notifs.rows)

         console.log("numbers render", notifs)
         // console.log(notifs.rows)
         console.log("work1?", notifs.rows && notifs.rows[0])
         console.log("work?", notif)
         console.log(Array.isArray(notifs.rows))

        return (            
            <ul>
               {notifs.rows && 
                notifs.rows.map(({ id, doc }) => <ListItem key={id} {...doc} />)}
            </ul>
        );
    }

}

export default Notification;
