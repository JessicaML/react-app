import React, { Component } from 'react';
import db from './index-pouch.js';

class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doc: {
        _id: '',
        title: '',
        body: '',
        viewed: false,

      },
    };
  }

 componentDidMount() {
    db.get('notif_1')
        .then(doc => this.setState(() => ({ doc })))
        .catch(err => console.log(err))
}

  render() {
    const {_id, title, body } = this.state.doc;
    return (
      <div className="recipes">
        <h1>id {_id}</h1>
        <p>
          <span>{title} title | </span>
          <span>{body} body</span>
        </p>
      </div>
    )
  }
}

export default Recipes;



