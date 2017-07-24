import React, { Component } from 'react';
import db from './index-pouch.js';

// function ListItem(props) {
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const result = props.numbers;
//   return (
//     <ul>
//       {result.map((number) =>
//         <ListItem key={result.toString()}
//                   value={result} />
//       )}
//     </ul>
//   );
// }



class Recipes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: [{
        _id: '',
        title: '',
        body: '',
        viewed: false,
      }],
    };
  }

  componentDidMount() {
    db.allDocs({
      include_docs: true,
      attachments: true,
      startkey: 'notif',
      endkey: 'notif\ufff0'
    })
      .then(result => this.setState(() => ({ result })))
      .then(function (result) {
      console.log(result);
    }).then(result => this.setState(() => ({ result })))
      .catch(err => console.log(err))

  }

  render() {
    const {_id, title, body } = this.state.result;
    console.log()return (
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



