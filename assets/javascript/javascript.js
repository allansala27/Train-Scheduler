$(document).ready(function() {

// Initialize Firebase
var config = {
	apiKey: "AIzaSyA8mdI9pPhTqOPgYyL8XDukH_9WlKHrWHc",
	authDomain: "train-scheduler-8ee61.firebaseapp.com",
    databaseURL: "https://train-scheduler-8ee61.firebaseio.com",
    storageBucket: "train-scheduler-8ee61.appspot.com",
    messagingSenderId: "738434695326"
};
firebase.initializeApp(config);

//on click function
$("#submit-btn").on("click", function (e) {
  	e.preventDefault();
  	//variables to reference firebase database
	var database = firebase.database();
	var dataRef = database.ref();

  	//variables to hold values of input boxes
  	var trainName = $("#train-name").val();
  	var destination = $("#destination").val();
  	var firstTrain = $("#first-train").val();
  	var frequency = $("#frequency").val();
  	console.log(frequency);

  	//push values into firebase
  	dataRef.push({
  		trainName : trainName,
  		destination : destination,
  		firstTrain : firstTrain,
  		frequency : frequency
  	});

  	//retrieve data
  	dataRef.on ("child_added", function (trainInfo) {
  		//create table row per train
  		var trainRow = $("<tr>");
  	})
});

});