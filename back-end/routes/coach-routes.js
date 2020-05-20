const express = require('express');
const CoachController = require('../controllers/coach-controller');

const router = express.Router();

router.get('/', CoachController.GetAllCoaches);
router.post('/', CoachController.PostCoach);
router.delete('/deleteOne', CoachController.DeleteCoach);

module.exports = router;
