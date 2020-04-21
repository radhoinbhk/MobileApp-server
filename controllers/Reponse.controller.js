const Reponse = require('../models/Reponse.model');
const ReponseService = require('../service/Reponse.service');


exports.getAllReponseWithFilter = function (req, res) {
    console.log("getAllReponseWithFilter", req.body.filter);
    ReponseService.SelectAllReponseWithFilter(req.body.filter)
        .then((result) => result ? res.send(result) : res.status(400).json({ message: 'en peux pas sélectionner les reponse' }))
        .catch(error => res.status(500).json({ message: error }))
};


/**
 * Add new Demande
 */
exports.AddReponse = function (req, res) {
    const reponse = new Reponse({
        descriptionReponse: req.body.descriptionReponse,
        dateReponse: req.body.dateReponse,
        idDemande: req.body.idDemande,
        idUser: req.body.idUser,
    })
    ReponseService.AddReponseService(reponse)
        .then((result) => result ? res.send('Reponse créée avec succès') : res.status(400).json({ message: 'la demande ne pas créé' }))
        .catch((error) => res.status(500).json({ message: error }))
};
