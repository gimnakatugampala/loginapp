const express = require('express')
const router = express.Router();

router.get('/login',function(req,res){
    res.render('login')
})

router.get('/register',function(req,res){
    res.render('register')
})

module.exports = router;