const express = require('express')
const router = express.Router();

router.get('/login',function(req,res){
    res.render('login')
})

router.get('/register',function(req,res){
    res.render('register')
})

router.post('/register',function(req,res){
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const password = req.body.password;
    const password2 = req.body.password2;
    console.log(first_name ,last_name , email ,password ,password2)
})

router.get('/logout',function(req,res){
    res.redirect('/users/login')
})


module.exports = router;