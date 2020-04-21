const express = require('express');
const router = express.Router();
const { check, body } = require('express-validator');

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');
const userService = require('../service/User.service');

const checkSigin = [check("CIN").isNumeric(), check("CIN").isLength({ min: 8, max: 8 })]
const checkSignup =
    [
        check("CIN").isNumeric(),
        check("Nom").isString(),
        check("Prenom").isString(),
        check("Code_Postal").isNumeric(),
        check("Code_Postal").isLength({ min: 4, max: 4 }),
        check("Email").isEmail(),
        check("Nmobile").isString(),
        check("State").isString(),
        check("Delegation").isString(),
        check("Infecté").isBoolean(),
        check("CIN").isLength({ min: 8, max: 8 }),
        body("CIN").custom(value => userService.findUserByFilter({"CIN": value}).then(user => {
            if (user) {
                return Promise.reject('CIN already is use');
            }
        }))
    ]

router.get('/getAllUser', user_controller.getAllUser);
router.post('/signin', checkSigin, user_controller.user_signin);
router.post('/signup', checkSignup, user_controller.user_signup);
router.post('/updateUser', user_controller.user_update);

module.exports = router;