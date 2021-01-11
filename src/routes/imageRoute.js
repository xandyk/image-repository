const { json } = require('express');
const express = require('express');
const router = new express.Router();

const upload = require('../services/upload');

const singleUpload = upload.single('photo');

router.post(
  '/image-upload',
  (req, res) => {
    singleUpload(req, res, err => {
      res.send('Image uploaded!');
    });
    // return res.json({ status: 'OK', uploaded: req.file.length });
  },
  (error, req, res, next) => {
    res.status(400).send('Please upload an image!');
  }
);

module.exports = router;
