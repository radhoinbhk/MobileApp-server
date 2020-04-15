const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RegionSchema = new Schema({
    Code_Postal: { type: String, required: true },
    State: { type: String, required: true },
    Delegation: { type: String, required: true },
    Responsable: { type: String, required: true },
    IdStatistique: [{ type: Schema.Types.ObjectId, ref: 'Statistique', required: true }],
});


// Export the model
module.exports = mongoose.model('Region', RegionSchema);