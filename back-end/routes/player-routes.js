const express = require('express');
const PlayerController = require('../controllers/player-controller');

const router = express.Router();

router.get('/', PlayerController.GetAllPlayers);
router.post('/', PlayerController.PostPlayer);
router.delete('/deleteOne', PlayerController.DeletePlayer);

module.exports = router;
