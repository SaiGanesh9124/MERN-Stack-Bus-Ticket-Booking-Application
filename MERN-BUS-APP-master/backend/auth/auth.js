const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const User = require('../models/User')
const bcrypt = require('bcrypt');



//Create a passport middleware to handle User login
passport.use('login', new localStrategy({
    usernameField: 'email', // should match your login form field name
    passwordField: 'password' // should match your login form field name
}, async (email, password, done) => {
    try {

        //Find the user associated with the email provided by the user
        const user = await User.findOne({ email });
        if (!user) {
            //If the user isn't found in the database, return a message
            return done(null, false, { message: 'User not found' });
        }
        //Validate password and make sure it matches with the corresponding hash stored in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return done(null, user, { message: 'Logged in Successfully' });
        } else {
            return done(null, false, { message: 'Wrong Password' });
        }
    } catch (error) {
        return done(error);
    }
}));

const JWTstrategy = require('passport-jwt').Strategy;
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;

//This verifies that the token sent by the user is valid
passport.use(new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey: 'top_secret',
    //we expect the user to send the token as a query parameter with the name 'secret_token'
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try {
        //Pass the user details to the next middleware
        return done(null, token.user);
    } catch (error) {
        done(error);
    }
}));