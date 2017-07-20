import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PouchDB from 'pouchdb';
import db from './index-pouch.js';

const { createClass, PropTypes } = React
const { render } = ReactDOM


var notifs;

db.get('mittens1').then(function (doc) {
     notifs = doc;
      console.log(notifs)
      return notifs;

    });

console.log(notifs)

var doc = {
  "_id": "mittens2",
  "name": "Mittens2",
  "occupation": "kitten2",
  "age": 32,
};

const Recipes = createClass({
  displayName: "Recipes",
  propTypes: {
      ingredients: PropTypes.number,
      steps: PropTypes.number,
      title: PropTypes.string
  },

  getDefaultProps() {
      return {
          ingredients: 0,
          steps: 0,
          title: "[untitled recipe]"
      }
  },

  render() {
      const {ingredients, steps, title} = this.props
      return (
          <div className="recipes">
              <h1>{title}</h1>
              <p>
                  <span>{ingredients} Ingredients | </span>
                  <span>{steps} Steps</span>
              </p>
         </div>
      )
  }
})






export default Recipes;



