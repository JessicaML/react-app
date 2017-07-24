import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import db from './index-pouch.js';

function ListItem(props) {
  return <li>{props.value}</li>;
}


function NumberList(props) {
      db.allDocs({
      include_docs: true,
      attachments: true,
      startkey: 'notif',
      endkey: 'notif\ufff0'
    })
      // .then(result => this.setState(() => ({ result })))
      .then(function (results) {
      console.log("numbers", results);
    }).then(results => this.setState(() => ({ results })))
      .catch(err => console.log(err))

  const {title, body } = this.state.results;
  return (
    <ul>
        <ListItem key={title}
                  value={body} />
      )}
    </ul>
  );
}


export default NumberList;
