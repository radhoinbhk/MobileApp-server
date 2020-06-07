const Reponse = require('../models/Reponse.model');


module.exports = {
    AddReponseService,
    SelectAllReponseWithFilter
};

function SelectAllReponseWithFilter(filter) {
    return Reponse.find(filter).populate('idUser');
}

function AddReponseService(reponse) {
    return reponse.save()
}