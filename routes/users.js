const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const passport = require('passport');

router.get('/register', (req, res) => {
    res.render('users/register');
})

router.post('/register', catchAsync(async(req, res) => {
    try {
        const {email, username, password} = req.body;
        const user = new User({email, username});
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if(err) { return next(err); }
            req.flash('success','Welcome to Yelp Camp!');
            res.redirect('/campgrounds'); 
        })
        // console.log(registeredUser);
    } catch(e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
}));

router.get('/login', (req, res) => {
    res.render('users/login');
})

router.post('/login', passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}) ,(req, res) => {
    req.flash('success', 'Welcome back');
    // console.log(req.session.returnTo);
    if(req.session.returnTo) {
        res.redirect(req.session.returnTo);
    } else {
        res.redirect('/campgrounds');
    }
    delete req.session.returnTo;
})

router.get('/logout', (req, res) => {
    // req.logout( (e) => {
    //     if(e) { return next(e); }
    //     req.flash('success', 'Logged Out!');
    //     res.redirect('/campgrounds');
    // }); this works for new version of passport

    req.logout();
    req.flash('success', 'Logged Out!');
    res.redirect('/campgrounds');
})

module.exports = router;