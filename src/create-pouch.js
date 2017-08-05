//fetch data from mongo

// var script = document.createElement('script');
// // assing src with callback name
// script.src = 'https://superintendant-weather-30201.bitballoon.com/notifications.json';

// console.log(script)

//set timeout (every 60 mins?)

// compare mongo data with pouch data

//if there is a new mongo db doc, create a new corresponding pouch doc

// give it an id with "notifs_xxx"

// var myRequest = new Request('flowers.jpg', myInit);

// fetch(myRequest).then(function(response) {
//   return response.blob();
// }).then(function(myBlob) {
//   var objectURL = URL.createObjectURL(myBlob);
//   myImage.src = objectURL;
// });

//

var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'no-cors',
               cache: 'default' };

let url = 'https://codepen.io/jobs.json';

fetch(url)
.then(res => res.json())
.then((out) => {
  console.log('Checkout this JSON! ', out);
})
.catch(err => console.error(err));



var myRequest = new Request(url, myInit);

fetch(myRequest).then(function(response) {
  return response.blob();
}).then(function(myBlob) {
  // var objectURL = URL.createObjectURL(myBlob);
  // myImage.src = objectURL;
  console.log('Checkout this JSON! ', myBlob);
});



export default url
