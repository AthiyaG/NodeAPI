var express = require('express');
var router = express.Router();

router.get('/all',function(req,res){
	res.write("hi dears.... ");
	res.end();
	
})

module.exports = router;