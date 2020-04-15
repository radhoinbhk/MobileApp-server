const User = require('../models/User.model');


module.exports = {
    authenticate,
    findUserByFilter,
    findUserAndUpdate
};

function authenticate(CIN, passwordUser) {
    return User.findOne({
        "CIN": CIN,
        "Password": passwordUser,
    })
}

function findUserByFilter(filter) {
    return User.findOne(filter)
}

function findUserAndUpdate(filter, update) {
    return User.findOneAndUpdate(filter, update)
}