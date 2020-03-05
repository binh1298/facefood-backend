'use strict';
const models = require('../db/models/index');
const status = require('http-status');
const {Op} = require("sequelize");
const url = require('url');

module.exports = {
  view_by_post_id: {
    async get(req, res, next) {
      try {
        const queryData = url.parse(req.url, true).query;
        if (queryData.postId == undefined) {
          queryData.postId = 0;
        }
        var ingredients = await models.Ingredient
          .findAll({
            attributes: [
              'ingredientId',
              'ingredientName',
              'value',
              'unitId',
              'postId',
            ],
            where: {
              post_id: queryData.postId
            }
          });
        const finalResult = await Promise.all(ingredients.map(async ingredient => {
          const foundUnitID = ingredient.dataValues.unitId;
          const foundUnitData = await models.Unit.findOne({
            attributes: ['unit_name'],
            where: {unit_id: foundUnitID}
          });
          const unitName = foundUnitData.dataValues.unit_name;
          return {...ingredient.dataValues, unitName}
        }));
        res.status(status.OK)
          .send({
            success: true,
            message: finalResult,
          });
      } catch (error) {
        next(error)
      }
    },
  },
};