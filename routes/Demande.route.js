const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const demande_controller = require('../controllers/Demande.controller');


router.post('/userJoin', demande_controller.AddUserJoin);
router.post('/addDemande', demande_controller.AddDemande);
router.post('/getDemandeWithFilter', demande_controller.getDemandeWithFilter);
router.post('/addStatusUserJoin', demande_controller.AddStatusUserJoin);

module.exports = router;