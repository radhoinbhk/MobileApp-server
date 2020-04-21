const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReponseSchema = new Schema({
    descriptionReponse: { type: String, required: true },
    dateReponse: { type: Date, required: true },
    idDemande: {type: Schema.Types.ObjectId, ref: 'Demande' ,required: true},
    idUser: {type: Schema.Types.ObjectId, ref: 'user' ,required: true},
});


// Export the model
module.exports = mongoose.model('Reponse', ReponseSchema);