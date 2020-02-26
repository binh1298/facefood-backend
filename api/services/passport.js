const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const models = require('../db/models/index');
const status = require('http-status');

import { JWT_SECRET } from '../configurations';
import { DefaultError } from '../utils/errorHandler';

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = JWT_SECRET;

module.exports = passport => {
  passport.use(new JwtStrategy(opts, function (jwt_payload, next) {
    models.User.findOne({
      attributes: [
        'user_id',
        'username',
        'email',
        'fullname',
        'role_id',
      ],
      where: {
        userId: jwt_payload.userId
      }
    }).then(user => {
      if(user) {
        next(null, user);
      } else {
        throw new DefaultError(status.UNAUTHORIZED, 'You are not authorized to perform this action!');
      }
    }).catch(err => {
      throw new DefaultError(status.INTERNAL_SERVER_ERROR, 'Something went wrong when trying to authorize you', err);
    });
  }));
}