const express = require('express');
const router = express.Router();

// Import du modèle "Thing"
const stuffController = require('../controllers/stuff.js');

// Middlewares
router.use(express.json());

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

router.post('/', stuffController.createThing);

router.get('/' + '', stuffController.getAllThings);

router.get('/:id', stuffController.getOneThing);

router.put('/:id', stuffController.modifyThing);

router.delete('/:id', stuffController.deleteThing);


module.exports = router;
