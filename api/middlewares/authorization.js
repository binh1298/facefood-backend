import { DefaultError } from '../utils/errorHandler';

const models = require('../db/models/index');
const status = require('http-status');

export function isAdmin(req, res, next) {
  models.User.findOne({
    attributes: [
      'role_id',
    ],
    where: {
      roleId: 0
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
}

export function isUser(req, res, next) {
  models.User.findOne({
    attributes: [
      'role_id',
    ],
    where: {
      roleId: 1
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
}