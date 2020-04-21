const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const reponse_controller = require('../controllers/Reponse.controller');


router.post('/addReponse', reponse_controller.AddReponse);
router.post('/getAllReponseWithFilter', reponse_controller.getAllReponseWithFilter);

module.exports = router;