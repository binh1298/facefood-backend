
  
'use strict';

/**
* Public Route
* path: /
*/

let express    = require('express');
let Controller = require('../controllers/UserController');
let router     = express.Router();

router.post('/login', Controller.login.post);
router.post('/register', Controller.register.post);

module.exports = router;