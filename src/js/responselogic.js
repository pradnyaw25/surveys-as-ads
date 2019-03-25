var config = {
    apiKey: "AIzaSyB2CN20ubyAmREHVP3Jhfw09NZzMuILz4k",
    authDomain: "surveyor-b96d5.firebaseapp.com",
    databaseURL: "https://surveyor-b96d5.firebaseio.com",
    projectId: "surveyor-b96d5",
    storageBucket: "surveyor-b96d5.appspot.com",
    messagingSenderId: "42681944429"
  };
  firebase.initializeApp(config);
var ctxTotal = document.getElementById('chartTotal').getContext('2d');
// console.log('kjhk', firebase.database().ref('surveys').equalTo('300'));
var chart = new Chart(ctxTotal, {
    // The type of chart we want to create
    type: 'horizontalBar',

    // The data for our dataset
    data: {
        labels: ["$300", "$350", "$400", "$450", "$500"],
        datasets: [{
            label: "Total Responses",
            backgroundColor: 'rgb(76, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            // data: firebase.database().ref('surveys').equalTo('300')
             data: [45, 10, 65, 2, 20],
        }]
    },

    // Configuration options go here
    options: {}
});
var chartGender = document.getElementById('chartGender').getContext('2d');
var chart = new Chart(chartGender, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["Male", "Female"],
        datasets: [{
            label: "Total Responses",
            backgroundColor: 'rgb(255, 88, 132)',
            borderColor: 'rgb(255, 99, 54)',
            data: [90, 10],
        }]
    },

    // Configuration options go here
    options: {}
});
var chartTime = document.getElementById('chartTime').getContext('2d');
var chart = new Chart(chartTime, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["$300", "$350", "$400", "$450", "$500"],
        datasets: [{
            label: "Total Responses",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [45, 10, 65, 2, 20],
        }]
    },

    // Configuration options go here
    options: {}
});
var chartPlatform = document.getElementById('chartPlatform').getContext('2d');
var chart = new Chart(chartPlatform, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["iOS", "Windows", "Mac", "Android"],
        datasets: [{
            label: "PLATFORM",
            backgroundColor: ['rgb(44, 99, 132)','rgb(255, 55, 132)','rgb(255, 99, 65)'],
            borderColor: 'rgb(255, 99, 132)',
            data: [66, 34, 65, 12],
        }]
    },

    // Configuration options go here
    options: {}
});