const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.js');

router.use( express.json() );

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

router.post('/signup', userController.signup);
router.post('/login', userController.login);

module.exports = router;
