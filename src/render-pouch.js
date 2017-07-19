import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PouchDB from 'pouchdb';
import db from './index-pouch.js';

const { createClass, PropTypes } = React
const { render } = ReactDOM

var notifs = db.get('mittens');

db.get('mittens').then(function (doc) {
  console.log(doc);
  var notifs = doc;

 console.log(notifs._id);
  console.log(notifs.name);
  console.log(notifs.occupation);
  console.log(notifs.age);

  return notifs;

}).catch(function (err) {
  console.log(err);
});

  console.log(notifs);

  console.log("bdkshfbsdkjhfklsdj");

  console.log(notifs._id);
  console.log(notifs.name);
  console.log(notifs.occupation);
  console.log(notifs.age);

const Recipes = createClass({
  displayName: "Recipes",
  propTypes: {
      _id: PropTypes.string,
      name: PropTypes.string,
      occupation: PropTypes.string,
      age: PropTypes.number
  },

  getDefaultProps() {
      return {
        _id: notifs._id,
        name: notifs.name,
        occupation: notifs.occupation,
        age: notifs.age
      }
  },

  render() {
      const {age, name, occupation} = this.props
      return (
          <div className="recipes">
              <h1>{age}</h1>
              <p>
                  <span>{name} name | </span>
                  <span>{occupation} occupation</span>
              </p>
         </div>
      )
  }
})

export default Recipes;


