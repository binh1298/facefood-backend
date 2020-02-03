'use strict';
const User = require('../db/models/User');
const status = require('http-status');

module.exports = {
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
  },
};