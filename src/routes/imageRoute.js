const express = require('express');
const router = new express.Router();

const upload = require('../services/upload');
const getImages = require('../services/display');

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

// GET images
router.get('/image-view', async (req, res, next) => {
  try {
    const images = await getImages();
    res.json(images);
  } catch (err) {
    next(err);
  }
});

// DELETE an image
router.delete('/image-delete', (req, res) => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: 'beach.jpg',
  };
  s3.deleteObject(params, (err, data) => {
    if (err) console.log(err, err.stack);
    else console.log('Successfully deleted');
  });
});

module.exports = router;
