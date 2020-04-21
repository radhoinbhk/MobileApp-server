const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const demande_controller = require('../controllers/Demande.controller');


router.post('/addDemande', demande_controller.AddDemande);
router.get('/getAllDemande', demande_controller.getAllDemande);

module.exports = router;