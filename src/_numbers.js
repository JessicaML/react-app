import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import db from './index-pouch.js';


class Child extends React {
  render() {
    return (<div>I'm the child</div>);
  }
}


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
         const { notifs } = this.state;
         const notif = JSON.stringify(notifs.rows)

        return ( 
            <div>           
                <div onClick={() => this.onClick()}>
                   {notifs.rows && 
                    notifs.rows.map(({ doc }) => (
                      <h2>{doc.title}</h2>
                   ))}
                </div>
                {
                this.state.childVisible
                ? <Child />
                : null
                }
            </div>    
        );
    }

    onClick() {
        this.setState({childVisible: !this.state.childVisible});
    }
}



export default Notification;
