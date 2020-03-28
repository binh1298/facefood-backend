'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const {Op} = require("sequelize");
const Sequelize = require("sequelize");
const url = require('url');
module.exports = {
  view: {
    async get(req, res) {
      try {
        const units = await models.Unit.findAll();
        res.status(status.OK)
          .send({
            success: true,
            message: units
          });
      } catch (error) {
        res.status(status.BAD_REQUEST)
          .send({
            success: false,
            message: error
          });
      }
    }
  }
};