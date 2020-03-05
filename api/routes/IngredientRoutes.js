'use strict';

/**
 * Ingredient Route
 * path: /ingredients
 */

let express = require('express');
let Controller = require('../controllers/IngredientController');
let router = express.Router();

router.get('/', Controller.view_by_post_id.get);

module.exports = router;