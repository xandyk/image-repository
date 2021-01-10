const express = require('express')
const router  = new express.Router()

const upload  = require('../services/3s-upload')

// Multer upload
// router.post('/image/upload', upload.array('photo'), async (req, res) => {
//    await res.send('Images uploaded!')
// }, (error, req, res, next) => {
//     res.status(400).send('Please upload an image!')
// }
// )

// S3 upload
router.post('/image/upload', upload.array('photo'), (req, res) => {
    // res.send('Images uploaded!')
    return res.json({status: 'OK', uploaded: req.files.length})
}
// , (error, req, res, next) => {
//      res.status(400).send('Please upload an image!')
//     }
)

module.exports = router