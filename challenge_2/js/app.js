console.log('challenge #2 -- app.js loaded!');

// var app = angular.module("appTwo", []);
// app.controller("WelcomeController", WelcomeController);

// function WelcomeController(){
//   this.full_name = "YOUR NAME"
// }

var app = angular.module("appTwo", []);

app.controller("WelcomeController", WelcomeController);
app.controller("ClassController", ClassController);

function WelcomeController() {
  this.full_name = "Sam";
  this.age = 28;
  this.city = "Bridgewater";
  this.state = "Massachusetts";
  this.full_name.length = 3;
}

function shout(name) {
  name.toUpperCase;

}

function ClassController () {
  this.class_name = "Gaia";
  this.enrolled_students = "18";
  this.start_date = new Date(2016,04,02);
  this.end_date = new Date(2016,06,22);


  function daysRemaining (firstDate, secondDate) {
  var oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds
  var firstDate = new Date(2016,04,02);
  var secondDate = new Date(2016,06,22);

  var diffDays = Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay));

}

}

