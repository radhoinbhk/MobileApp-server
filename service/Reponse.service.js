const Reponse = require('../models/Reponse.model');


module.exports = {
    AddReponseService,
    SelectAllReponseWithFilter
};

function SelectAllReponseWithFilter(filter) {
    return Reponse.find(filter);
}

function AddReponseService(reponse) {
    return reponse.save()
}