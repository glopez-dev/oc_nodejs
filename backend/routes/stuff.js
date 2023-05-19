const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Import du modèle "Thing"
const stuffController = require('../controllers/stuff');

// Middlewares
router.use(express.json());

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

router.post('/', auth, multer, stuffController.createThing);

router.get('/' + '', auth, stuffController.getAllThings);

router.get('/:id', auth, stuffController.getOneThing);

router.put('/:id', auth, multer, stuffController.modifyThing);

router.delete('/:id', auth, stuffController.deleteThing);


module.exports = router;
