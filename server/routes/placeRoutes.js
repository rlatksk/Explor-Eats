const express = require('express');
const multer = require('multer');
const { createPlace, getPlaces } = require('../controllers/placeController');
const router = express.Router();

const upload = multer();

router.post('/places', upload.fields([{ name: 'foodImages' }, { name: 'ambienceImages' }]), createPlace);
router.get('/places', getPlaces);

module.exports = router;