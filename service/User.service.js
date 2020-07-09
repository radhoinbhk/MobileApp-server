const User = require('../models/User.model');


module.exports = {
    authenticate,
    findUserByFilter,
    findUserAndUpdate,
    findAssociation
};

function findAssociation(filter) {
    return User.find({Nom : {$regex: filter }})
}

function authenticate(CIN, passwordUser) {
    return User.findOne({
        "CIN": CIN,
        "Password": passwordUser,
    })
}

function findUserByFilter(filter) {
    console.log("filter",filter);
    return User.findOne(filter)
}

function findUserAndUpdate(filter, update) {
    return User.findOneAndUpdate(filter, update)
}