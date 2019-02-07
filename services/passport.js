const passport = require('passport')
const GoogleStratgey = require('passport-google-oauth20').Strategy
const Keys = require('../config/keys')
const mongoose = require('mongoose')

const User = mongoose.model('users')

passport.use(
    new GoogleStratgey({
        clientID: Keys.googleClientId,
        clientSecret: Keys.googleClientSecret,
        callbackURL: '/auth/google/callback',

    }, (accessToken, refreshToken, profile, done) => {

        User.findOne({ googleId: profile.id })
            .then((existingUser) => {
                if (existingUser) {
                    //we don have a user with this id 
                    done(null,existingUser)       
                
                } else {
                    //we don't have this id  create a new user 
                    new User({  googleId: profile.id })
                    .save()
                    .then(user => done(null, user));
             
                }
            })



    })
);

