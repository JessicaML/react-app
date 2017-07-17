import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PouchDB from 'pouchdb';

const { createClass, PropTypes } = React
const { render } = ReactDOM

const PouchDoc = createClass({
  displayName: "Recipes",
  propTypes: {
      _id: PropTypes.number,
      name: PropTypes.string,
      occupation: PropTypes.string,
      seen: PropTypes.string,

  },

  getDefaultProps() {
      return {
          "_id": 1,
          "name": "Mittens",
          "occupation": "kitten",
          "seen": "no",
      }
  },

  render() {
      const {name, occupation} = this.props
      return (
          <div className="pouchDoc">
              <p>
                  <span>{name} name | </span>
                  <span>{occupation} occupation</span>
              </p>
         </div>
      )
  }
})

new PouchDB('sample').destroy().then(function () {
  return new PouchDB('sample');
}).then(function (db) {

  db.put(PouchDoc).then(function () {
    return db.get('mittens');
  }).then(function (PouchDoc) {
    return 'We stored a kitten: ' + JSON.stringify(PouchDoc);
  });

});



export default PouchDoc;




