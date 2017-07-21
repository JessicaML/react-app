import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PouchDB from 'pouchdb';
import db from './index-pouch.js';

const { createClass, PropTypes } = React
const { render } = ReactDOM




var getNotifs = function() { 
  var notifs = db.get('mittens1').then(function (doc) {
    notifs = doc;
    console.log("export-prom "+notifs)
    return notifs;

    })
};

console.log(getNotifs())

export default getNotifs;
