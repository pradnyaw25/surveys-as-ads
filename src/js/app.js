var config = {
    apiKey: "AIzaSyB2CN20ubyAmREHVP3Jhfw09NZzMuILz4k",
    authDomain: "surveyor-b96d5.firebaseapp.com",
    databaseURL: "https://surveyor-b96d5.firebaseio.com",
    projectId: "surveyor-b96d5",
    storageBucket: "surveyor-b96d5.appspot.com",
    messagingSenderId: "42681944429"
  };
  firebase.initializeApp(config);
 // let payload = {
    //   surveyId: 1,
    //   answer:500,
    //   city:'Paris',
    //   age: 23,
    //   gender:'M',
    //   date: '',
    //   time: '',
    //   ip: '',
    //   platform: '',
    //   os: ''
    // };
var database = firebase.database();

function writeToDatabase(payload) {
  var newKey = database.ref().child('surveys').push().key;
  var updates = {};
  updates['/surveys/' + newKey] = payload;
  return database.ref().update(updates);
}

// function writeToDatabase(payload) {
//   //var newKey = database.ref().child('surveys').push().key;
//   var surveyId = 1;
//   var value = 300;
//   var val = database.ref().child('surveys').child('counts').child(surveyId).child(value);

//   var updates = {};

//   updates['/surveys/counts/' + surveyId +'/'+ value] = val ? val + 1 || 0;
//   return database.ref().update(updates);
// }