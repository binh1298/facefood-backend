const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const models = require('../db/models/index');

import { JWT_SECRET } from '../configurations';

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWT_SECRET;

module.exports = passport => {
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    models.User.findOne({ userId: jwt_payload.userId }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  }));
}