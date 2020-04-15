const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DemandeSchema = new Schema({
    Titre: { type: String, required: true },
    State: { type: String, required: true },
    Delegation: { type: String, required: true },
    Adresse: { type: String, required: true },
    Domaine_action: { type: String, required: true },
    Objectif: { type: String, required: true },
    Description: { type: String, required: true },
    PublicsBenef: { type: String, required: true },
    CINUser: {type: Schema.Types.ObjectId, ref: 'user' ,required: true},
});


// Export the model
module.exports = mongoose.model('Demande', DemandeSchema);