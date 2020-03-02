'use strict';

/**
 * Image Route
 * path: /image
 */

let express = require('express');
let Controller = require('../controllers/ImageController');
let router = express.Router();
let app = express();
let bodyParser = require('body-parser');

router.post('/', Controller.upload.post);
router.post('/:imageId/update', Controller.update.post);

router.use(bodyParser.json({limit: '50mb'}));
router.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

module.exports = router;