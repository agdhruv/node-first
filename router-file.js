var express = require('express');
var router = express.Router();

router.route('/test')
	.get(function(req,res){
		res.send("check");
	})
	.post(function(req,res){
		var name = req.body.name;
  		if(name === 'dhruv'){
  			res.send("hi");
  		}
	});
router.route('/test1')
	.get(function(req,res){
		res.send("check1");
	})
	.post(function(req,res){
		var name = req.body.name;
  		if(name === 'dhruv'){
  			res.send("hi");
  		}
	});
module.exports = router;