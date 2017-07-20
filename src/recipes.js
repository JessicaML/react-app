import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const { createClass, PropTypes } = React
const { render } = ReactDOM

const Recipes = createClass({git
  displayName: "Recipes",
  propTypes: {
      ingredients: PropTypes.number,
      steps: PropTypes.number,
      title: PropTypes.string
  },

  getDefaultProps() {
      return {
          ingredients: array[0].key,
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


