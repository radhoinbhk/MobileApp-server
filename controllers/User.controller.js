const User = require('../models/User.model');
const UserService = require('../service/User.service');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const SECRET_KEY = "JWT_SECRET";


exports.getAssociation = function (req, res) {
    UserService.findAssociation(req.params.filter)
        .then(result => result ? res.send(result) : res.status(400).json({ message: 'association not found' }))
        .catch(err => next(err))
};


/**
 * get User With Filter
 */
exports.getUserWithFilter = function (req, res) {
    UserService.findUserByFilter(req.body.filter)
        .then((result) => result ? res.send(result) : res.status(400).json({ message: 'en peux pas sélectionner les utilisateur' }))
        .catch(error => res.status(500).json({ message: error }))
};

/**
 * get all users
 */
exports.getAllUser = function (req, res) {
    User.find({}, function (err, users) {
        var userMap = {};
        users.forEach(function (user) {
            userMap[user._id] = user;
        });
        res.send(userMap);
    });
};

/**
 * update profile user controller
 */
exports.user_update = function (req, res) {
    let filter = { "CIN": req.body.CIN }
    let update = req.body.update
    UserService.findUserAndUpdate(filter, update)
        .then(result => result ? res.send('User update successfully') : res.status(400).json({ message: 'User not update successfully' }))
        .catch(err => next(err))
};


/**
 * signin controllers
 */
exports.user_signin = function (req, res) {
    let CIN = req.body.CIN;
    let passwordUser = req.body.Password;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    UserService.authenticate(CIN, passwordUser)
        .then(user => {
            const token = jwt.sign({ data: user }, SECRET_KEY, {
                expiresIn: 604800 // 1 week
            });
            user ?
                res.json({
                    success: true,
                    token: token,
                    user: user
                })
                : res.status(400).json({ message: 'Username or password is incorrect' })
        })
        .catch(err => next(err));
};

/**
 * SignUP controllers
 */
exports.user_signup = function (req, res) {
    console.log("req",req);
    let user = new User(
        {
            CIN: req.body.CIN,
            Nom: req.body.Nom,
            Prenom: req.body.Prenom,
            Code_Postal: req.body.Code_Postal,
            Email: req.body.Email,
            Password: req.body.Password,
            Nmobile: req.body.Nmobile,
            State: req.body.State,
            Delegation: req.body.Delegation,
            TypeUser: req.body.TypeUser,
            DateNaissance: req.body.DateNaissance,
            // Infecté: req.body.Infecté,
            PosteAutorite: req.body.PosteAutorite,
            Adresse: req.body.Adresse,
        }
    );
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    user.save(function (err) {
        if (err) {
            console.log(err);
            return next(err);
        }
        res.send('User Created successfully')
    })
};