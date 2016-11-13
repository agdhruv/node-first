var express = require('express');
var app = express();
var mongoose = require('mongoose');
var studentDetails = require('./models/student.js');
var teacherDetails = require('./models/teacher.js');
var bodyParser = require('body-parser');
var routes = require('./router-file');

//connect to db
/*mongoose.connect('mongodb://localhost:27017/learn-db',function(err){
	if(!err){
		console.log("connection successful");
	}
	else{
		console.log(err);
	}
});*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', routes);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/login', function (req, res) {
  res.send('This is login page');
});

app.post('/newpost', function (req, res) {
  var name = req.body.name;
  if(name === 'dhruv'){
  		res.send("hi");
  }
});

/*//table for 7
console.log("Table for 7");
for(var i=1;i<=10;i++){
  console.log("7 * "+i+" = "+(7*i));
}
console.log("\n\n");

//even and odd
console.log("Even and odd");
for(var i=1;i<=100;i++){
  if((i%2)===0){
    console.log(i + " is even");
  }
  else{
    console.log(i + " is odd");
  }
}
console.log("\n\n");

//Leap year
console.log("Leap year");
for(var i=2000;i<=3000;i++){
  if((i%4)===0){
    console.log(i + " is a leap year.");
  }
}
console.log("\n\n");

//Grade system
console.log("Grade system");
var percentage = 55,
    grade = null;
if(percentage>=60){
  grade = "first division";
}
else if(percentage>=50){
  grade = "second division";
}
else if(percentage>=40){
  grade = "third division";
}
else{
  grade = "fail";
}
console.log(grade);
console.log("\n\n");*/

//Prime
for(var i = 1; i <= 10; i++){
  for(var j = 2; j<= i-1; j++){
    if(i%j === 0){
      break;
    }
    else{
      console.log(i + " is prime.");
      break;
    }
  }
}

//Factorial
var product = 1;
for(var i = 6; i >= 1; i--){
  product *= i;
}
console.log(product);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});