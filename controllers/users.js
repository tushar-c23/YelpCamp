const Campground = require('../models/campground');
const Review = require('../models/review');
const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.registerUser = async(req, res) => {
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
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'Welcome back');
    // console.log(req.session.returnTo);
    if(req.session.returnTo) {
        res.redirect(req.session.returnTo);
    } else {
        res.redirect('/campgrounds');
    }
    delete req.session.returnTo;
}

module.exports.logout = (req, res) => {
    // req.logout( (e) => {
    //     if(e) { return next(e); }
    //     req.flash('success', 'Logged Out!');
    //     res.redirect('/campgrounds');
    // }); this works for new version of passport

    req.logout();
    req.flash('success', 'Logged Out!');
    res.redirect('/campgrounds');
}
