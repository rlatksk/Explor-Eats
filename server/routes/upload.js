const express = require('express');
const multer = require('multer');
const { uploadFile } = require('../services/googleCloudStorage');
const router = express.Router();

const upload = multer();

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    const publicUrl = await uploadFile(file);
    res.status(200).json({ url: publicUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;