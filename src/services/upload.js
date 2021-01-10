const path     = require('path')
const aws      = require('aws-sdk')
const uuid     = require('uuid').v4
const multer   = require('multer')
const multerS3 = require('multer-s3')

const s3 = new aws.S3({apiVersion: '2006-03-01'})

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.REGION
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket:'images.repository',
        acl: 'public-read',
        metadata: (req, file, cb) => {
            cb(null, {fieldName: file.fieldname})
        },
        key: (req, file, cb) => {
            const ext = path.extname(file.originalname)
            cb(null, `${uuid()}${ext}`)
        }
    })
})

module.exports = upload
