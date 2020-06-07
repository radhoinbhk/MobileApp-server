const Demande = require('../models/Demande.model');
const DemandeService = require('../service/Demande.service');



exports.AddStatusUserJoin = function (req, res) {
    DemandeService.AddStatusUserJoin(req.body)
        .then((result) => result ? res.send(result) : res.status(400).json({ message: 'en peux pas add status utilisateur joind' }))
        .catch(error => res.status(500).json({ message: error }))
};

exports.AddUserJoin = function (req, res) {
    DemandeService.AddUserJoin(req.body)
        .then((result) => result ? res.send(result) : res.status(400).json({ message: 'en peux pas add utilisateur joind' }))
        .catch(error => res.status(500).json({ message: error }))
};

exports.getDemandeWithFilter = function (req, res) {
    DemandeService.SelectAllDemandeWithFilter(req.body)
        .then((result) => result ? res.send(result) : res.status(400).json({ message: 'en peux pas sélectionner les demandes' }))
        .catch(error => res.status(500).json({ message: error }))
};


/**
 * Add new Demande
 */
exports.AddDemande = function (req, res) {
    const demande = new Demande({
        Titre: req.body.Titre,
        Objectif: req.body.Objectif,
        Description: req.body.Description,
        Domaine_action: req.body.Domaine_action,
        PublicsBenef: req.body.PublicsBenef,
        State: req.body.State,
        Delegation: req.body.Delegation,
        Adresse: req.body.Adresse,
        idUser: req.body.idUser,
    })
    DemandeService.AddDemandeService(demande)
        .then((result) => result ? res.send('Demande créée avec succès') : res.status(400).json({ message: 'la demande ne pas créé' }))
        .catch((error) => res.status(500).json({ message: error }))
};
