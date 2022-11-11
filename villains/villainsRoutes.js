const express = require('express');

const router = express.Router();

const villains = ['Sauron', 'Saruman', 'Gollum'];

router.get('/', (req, res) => {
    res.status(200).json(villains);
});

module.exports = router;