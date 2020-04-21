const Demande = require('../models/Demande.model');


module.exports = {
    AddDemandeService,
    SelectAllDemande
};

function SelectAllDemande() {
    return Demande.find();
}

function AddDemandeService(demande) {
    return demande.save()
}