const express = require('express');
const router = new express.Router();

const upload = require('../controllers/upload');
const getImages = require('../controllers/display');
const deleteImage = require('../controllers/delete');
const imageModel = require('../model/imageModel');
const searchImages = require('../controllers/search');

const singleUpload = upload.single('photo');

// POST: upload an image with caption
router.post('/image', singleUpload, async (req, res, next) => {
  try {
    const { caption } = req.body;
    await imageModel.create({ name: req.file.location, caption });
    res.status(201).json({ status: 'OK' });
  } catch (err) {
    next(err);
  }
});

// GET an image by its filename if its filename exists, if not, list all the images
router.get('/image/:filename', async (req, res, next) => {

  try {
    // try to get an image by its filename if exists
    if(req.params.filename !== null) {
      
      res.json({
        filename: `https://s3-us-west-2.amazonaws.com/images.library/${req.params.filename}`
      })
      // send request 
    } else {
      const images = await getImages();
      res.json(images);
    }
  } catch (err) {
    next(err);
  }
});

// GET all images
router.get('/image/', async (req, res, next) => {

  try {
      // send me a list of all images
      const images = await getImages();
      res.json(images);
    
  } catch (err) {
    next(err);
  }
});

// Search for an image
router.get('/image-search/:keyword', async (req, res, next) => {
  try {
    const { keyword } = req.params;
    const search = await searchImages.searchByCaption(keyword)
    res.json(search)
  } catch (err) {
    next(err)
  }
} )

// DELETE an image
router.delete('/image/:filename', async (req, res, next) => {
  try {
    if(req.params.filename == null) {
      return res.json({'Error': 'Filename is missing in the request' })
    } else if (
      //  check file exists using filename
      !searchImages.searchByName(req.params.filename)
    ) {
      return res.json({'Error': 'File is missing in the database'})
    }
    // check if the filename is existing in the DB
    const remove = await deleteImage(req.params.filename);
    res.json(remove);
  } catch (err) {
    next(err);
  }
});

module.exports = router;



