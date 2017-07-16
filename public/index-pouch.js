var db = new PouchDB('sample');
db.info().then(function (info) {
  document.getElementById('display').innerHTML = 'We have a database: ' + JSON.stringify(info);
});z