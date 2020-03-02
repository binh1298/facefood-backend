'use strict';

/**
 * Image Route
 * path: /images
 */

let express = require('express');
let Controller = require('../controllers/ImageController');
let router = express.Router();
var app = express();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
  limit: '10mb',
  parameterLimit: 100000,
  extended: false
}));

router.use(bodyParser.json({
  limit: '10mb'
}));

router.post('/', Controller.upload.post);
router.post('/:imageId/update', Controller.update.post);
router.put('/:imageId/delete', Controller.delete.put);

module.exports = router;