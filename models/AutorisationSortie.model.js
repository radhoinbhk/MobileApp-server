const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let AutorisationSortieSchema = new Schema({
    DateDeSortie: { type: Date, required: true },
    HeureDeSortie: { type: Date, required: true },
    MotifDeSortie: { type: String, required: true },
    Destination: { type: String, required: true },
    idUser: { type: Schema.Types.ObjectId, ref: 'user', required: true },
});


// Export the model
module.exports = mongoose.model('AutorisationSortie', AutorisationSortieSchema);