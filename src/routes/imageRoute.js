const express = require('express');
const router = new express.Router();

const upload = require('../services/upload');
const viewImages = require('../services/view');

const singleUpload = upload.single('photo');

router.post(
  '/image-upload',
  async (req, res) => {
    await singleUpload(req, res, err => {
      res.send('Image uploaded!');
    });
    // return res.json({ status: 'OK', uploaded: req.file.length });
  },
  (error, req, res, next) => {
    res.status(400).send('Please upload an image!');
  }
);

router.get('/image-view/', async (req, res) => {
  await viewImages(req, res => {
    res.send('Here are your images');
  });
  res.status(404).send();
});

module.exports = router;
