const express = require('express');
const router = new express.Router();

const upload = require('../controllers/upload');
const download = require('../controllers/download');
const getImages = require('../controllers/display');
const deleteImage = require('../controllers/delete');

// POST an image
router.post('/image-upload', async (req, res) => {
  const singleUpload = upload.single('photo');

  await singleUpload(req, res, err => {
    if (err) {
      res.send(err);
    }
    res.json({ message: 'Image is uploaded' });
  });
});

// GET all images
router.get('/image-view', async (req, res, next) => {
  try {
    const images = await getImages();
    res.json(images);
  } catch (err) {
    next(err);
  }
});

// GET: Download an image
router.get('/image-download/:filename', async (req, res, next) => {
  try {
    const downloadFile = await download();
    res.json(downloadFile);
  } catch (err) {
    next(err);
  }
});

// DELETE an image
router.delete('/image-delete', async (req, res, next) => {
  try {
    const remove = await deleteImage();
    res.json(remove);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
