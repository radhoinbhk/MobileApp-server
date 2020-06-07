
const userService = require('../service/User.service');
const { check, body } = require('express-validator');

exports.checkSignup = function (params) {
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
        body("CIN").custom(value => userService.findUserByFilter({ "CIN": value }).then(user => {
            if (user) {
                return Promise.reject('CIN already is use');
            }
        }))
    ]
}

// exports.checkSigin = function () {
//     [check("CIN").isNumeric(), check("CIN").isLength({ min: 8, max: 8 })]
// }
