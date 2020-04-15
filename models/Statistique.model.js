const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StatistiqueSchema = new Schema({
    CodePostReg: {type: String, required: true},
    CreateDate: {type: Date, required: true},
    NbrTotal: {type: Number, required: true},
    NewNmbr: {type: Number, required: true},
    Retabli: {type: Number, required: true},
    Morts: {type: String, required: true},
    State: {type: String, required: true},
    Delegation: {type: String, required: true},
    CINUser: {type: Schema.Types.ObjectId, ref: 'user' ,required: true},
});


// Export the model
module.exports = mongoose.model('Statistique', StatistiqueSchema);