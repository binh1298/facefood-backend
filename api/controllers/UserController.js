'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const bcrypt = require('bcryptjs');

const {validationResult} = require('express-validator');
import {DefaultError} from '../utils/errorHandler';

module.exports = {
  // Public Routes
  login: {
    async post(req, res, next) {
      try {
        const user = await models.User.findOne({
          where: {
            username: req.body.username,
          },
          attributes: ['username', 'password'],
        });
        if (!user) throw new DefaultError(status.BAD_REQUEST, 'Invalid Username or password');
        const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!isValidPassword) throw new DefaultError(status.BAD_REQUEST, 'Invalid Username or password');

        return res.status(status.OK).send({
          success: true,
          message: "Login successfully.",
          user
        });
      } catch (error) {
        next(error);
      }
    }
  },
  register: {
    async post(req, res, next) {
      try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          throw new DefaultError(status.BAD_REQUEST, 'Please enter valid values!', errors.array());
        }
        const duplicateUser = await models.User.findOne({
          where: {username: req.body.username},
          attributes: ['username']
        });
        if (duplicateUser) {
          throw new DefaultError(status.BAD_REQUEST, 'This username is taken!');
        }

        if (!duplicateUser) {
          const user = await models.User.create(req.body);
          res.status(status.CREATED).send({
            success: true,
            user: user,
            message: 'Register successful.',
          });
        }
      } catch (error) {
        next(error);
      }
    },
  },
  // Private Routes
  profile: {
    async get(req, res, next) {
      try {
        const user = await models.User.findOne({
          where: {
            username: req.body.username,
          },
        });
        if (!user) throw new DefaultError(status.BAD_REQUEST, 'Invalid user');
        return res.status(status.OK).send({
          success: true,
          user
        });
      } catch (error) {
        next(error);
      }
    }
  },
  view: {
    async get(req, res, next) {
      try {
        const users = await models.User.findAll([]);
        res.status(status.OK)
          .send({
            success: true,
            message: users,
          });
      } catch (error) {
        next(error);
      }
    }
  },
};