'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {Op} = require("sequelize");
const {validationResult} = require('express-validator');
const url = require('url');

import {DefaultError} from '../utils/errorHandler';
import {JWT_SECRET} from '../configurations';

module.exports = {
  // Public Routes
  login: {
    async post(req, res, next) {
      try {
        const user = await models.User.findOne({
          where: {
            username: req.body.username,
          },
          attributes: ['username', 'password', 'userId'],
        });
        if (!user) throw new DefaultError(status.BAD_REQUEST, 'Invalid Username or password');
        const isValidPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!isValidPassword) throw new DefaultError(status.BAD_REQUEST, 'Invalid Username or password');
        const {userId, username, roleName = 'admin'} = user;
        const token = jwt.sign({userId, username, roleName}, JWT_SECRET);
        return res.status(status.OK).send({
          status: true,
          message: "Login successfully.",
          token
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
        const {email, username, password, confirmPassword} = req.body;
        const duplicateUser = await models.User.findOne({
          where: {username},
          attributes: ['username']
        });
        if (duplicateUser) {
          throw new DefaultError(status.BAD_REQUEST, 'This username is taken!');
        }

        if (!duplicateUser) {
          await models.User.create({
            email,
            username,
            password,
            roleId: 2,
          });
          res.status(status.CREATED).send({
            status: true,
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
          status: true,
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
        const queryData = url.parse(req.url, true).query;
        if (queryData.username == undefined) {
          queryData.username = '';
        }
        if (queryData.order == undefined) {
          queryData.order = 'created_at,asc'
        }
        const orderOptions = queryData.order.split(",");
        const users = await models.User.findAll({
          attributes: [
            'user_id',
            'username',
            'email',
            'fullname',
            'phone_number',
            'role_id',
            'created_at',
            'updated_at'
          ],
          where: {
            username: {
              [Op.iLike]: '%' + queryData.username + '%'
            }
          },
          order: [
            [orderOptions[0], orderOptions[1]],
          ]
        });
        res.status(status.OK)
          .send({
            status: true,
            message: users,
          });
      } catch (error) {
        next(error);
      }
    }
  },
  view_one: {
    async get(req, res, next) {
      try {
        const user = await models.User.findOne({
            attributes: [
              'user_id',
              'username',
              'email',
              'fullname',
              'phone_number',
              'role_id',
              'created_at',
              'updated_at'
            ],
            where: {
              username: req.params.username
            }
          },
        );
        res.status(status.OK)
          .send({
            status: true,
            message: user,
          });
      } catch (error) {
        next(error);
      }
    }
  }
};