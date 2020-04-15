const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    CIN: { type: String, required: true },
    Nom: { type: String, required: true },
    Prenom: { type: String, required: true },
    Code_Postal: { type: String, required: true },
    Email: { type: String, required: true },
    Password: { type: String, required: true },
    Nmobile: { type: String, required: true },
    State: { type: String, required: true },
    Delegation: { type: String, required: true },
    Adresse: { type: String, required: true },
    DateNaissance: { type: String, required: false },
    Infecté: { type: Boolean, required: false },
    PosteAutorite: { type: String, required: false },
    // role type enum
});


// Export the model
module.exports = mongoose.model('user', UserSchema);