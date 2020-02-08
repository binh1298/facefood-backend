
  
'use strict';

/**
* Public Route
* path: /
*/

let express    = require('express');
let Controller = require('../controllers/UserController');
const { check, body } = require('express-validator');
let router     = express.Router();

router.post('/login', Controller.login.post);
router.post('/register',[
  check('email', 'Invalid Email').isEmail().normalizeEmail(),
  check('username', 'Username must be at least 5 characters').isLength({ min: 5 }),
  check('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
  check('password', 'Password have to match Confirm Password').custom((value,{req, loc, path}) => {
    if (value !== req.body.confirmPassword) {
        throw new Error("Passwords don't match");
    } else {
        return value;
    }
}),
], Controller.register.post);

module.exports = router;