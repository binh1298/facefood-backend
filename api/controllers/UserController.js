'use strict';
const User = require('../db/models/User');
const status = require('http-status');

module.exports = {
  // Public Routes
  login: {
    post(req, res) {
      return res.status(status.CREATED)
        .send({
          success: true,
          message: 'Login Successfully!!',
          error: null,
          token: null
        });
    },
  },
  register: {
    post(req, res) {
      User.find({
        where: {username: req.body.username},
        attributes: [ 'username' ]
      }).then(function(user) {
        if(!user) {
          User
            .create(req.body)
            .complete(function(err, user) {
              if(err) throw err;
              else {
                res.status(status.CREATED).send({
                  success: true,
                  user: user,
                  message: 'Register Successfully!!',
                });
              }
            })
        }
      }) 
    },
  },
  // Private Routes
  index: {
    get(req, res) {
      return res.status(status.OK)
        .send({
          success: true,
          message: 'Get Successfully!!',
          error: null,
          token: null
        });
    },
  },
  new: {
    post(req, res) {
      return res.status(status.CREATED)
        .send({
          success: true,
          message: 'Created Successfully!!',
          error: null,
          token: null
        });
    },
  }
};