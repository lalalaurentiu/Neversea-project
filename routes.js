var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    console.log("SITE: I'm on");
    res.render("index")
    
});


router.get("/data", function(req, res){
    res.render("data");
});

router.get("/contact", function(req, res){
    res.render("contact");
});


module.exports = router;