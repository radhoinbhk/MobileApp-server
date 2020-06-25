const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');
const user_validator = require('../Validator/User.validator');



router.get('/getAssociation/:filter', user_controller.getAssociation);
router.get('/getAllUser', user_controller.getAllUser);
router.post('/getUserWithFilter', user_controller.getUserWithFilter);
router.post('/signin', user_controller.user_signin);
router.post('/signup', user_validator.checkSignup, user_controller.user_signup);
router.post('/updateUser', user_controller.user_update);

module.exports = router;