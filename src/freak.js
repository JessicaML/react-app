import React from 'react';
import ReactDOM from 'react-dom';
import PouchDB from 'pouchdb';
import db from './index-pouch.js';

export default db.get('mittens1').then(function (doc) {
	const notifs = doc;
  });






