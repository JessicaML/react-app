import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PouchDB from 'pouchdb';

const { createClass, PropTypes } = React
const { render } = ReactDOM

var doc = {
  "_id": "1",
  "title": "New feature",
  "body": "This is a draft Notification, let's hope this thing",
  "viewed": "false"
};

var NotificationItem = React.createClass ( {
  propTypes: {
    views: React.PropTypes.number,
    title: React.PropTypes.string,
    body: React.PropTypes.string,
    date: React.PropTypes.string,
  },

new PouchDB('sample').destroy().then(function () {
  return new PouchDB('sample');
}).then(function (db) {

  db.put(doc).then(function () {
    return db.get('mittens');
  }).then(function (doc) {
    return 'We stored a kitten: ' + JSON.stringify(doc);
  });

});

var notificationItemElements = doc
  .map(function(doc) {return React.createElement(NotificationItem, doc)})

var PouchDoc =
  React.createElement('div', {},
    React.createElement('h1', {}, 'All Notifications'),
    React.createElement('p', {}, notificationItemElements)
  )
)

export default PouchDoc;

