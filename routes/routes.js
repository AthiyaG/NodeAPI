var express = require('express');
var router = express.Router();

router.get('/all',function(req,res){
	myObj = { "name":"John", "age":30, "car":"BMW" };
	//res.write("hi dears.... ");
	var JSONdata = JSON.stringify(myObj);
    res.send(JSONdata);
	//res.end();
	
})

module.exports = router;