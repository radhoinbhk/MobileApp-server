const Demande = require('../models/Demande.model');


module.exports = {
    AddDemandeService,
    SelectAllDemandeWithFilter,
    AddUserJoin,
    AddStatusUserJoin
};

function AddStatusUserJoin(data) {
    return Demande.updateOne({ '_id': data.idDemande },
        { '$push': { "userJoinWithStatus": { '$each': [{ "idUserJoin": data.idUserJoin, "userJoinStatus": data.userJoinStatus }] } } })
}

function AddUserJoin(data) {
    return Demande.updateOne({ '_id': data.idDemande },
        { '$push': { "userJoin": { '$each': [data.userJoin] } } })
}

function SelectAllDemandeWithFilter(filter) {
    return Demande.find(filter).populate('userJoin');
}

function AddDemandeService(demande) {
    return demande.save()
}