const express = require('express');
const router = new express.Router();

const upload = require('../controllers/upload');
const download = require('../controllers/download');
const getImages = require('../controllers/display');
const deleteImage = require('../controllers/delete');
const imageModel = require('../model/imageModel');

const singleUpload = upload.single('photo');

// POST an image
router.post('/image-upload', singleUpload, async (req, res, next) => {
  try {
    const { caption } = req.body;
    console.log(req.file);
    console.log(caption);
    await imageModel.create({ name: req.file.location, caption });
    res.json({ status: 'OK' });
  } catch (err) {
    next(err);
  }
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
