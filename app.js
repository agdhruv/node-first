var express11 = require('express');
var app = express11();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/name', function (req, res) {
  res.download("/Users/Dhruv/Pictures/DSC_0037.jpg",function(err){
  	console.log(err);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});