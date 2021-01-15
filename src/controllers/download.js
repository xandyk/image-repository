const fs = require('fs');
const path = require('path');
const aws = require('aws-sdk');
const s3 = new aws.S3();

const download = () => {
  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: 'beach.jpg',
  };

  const file = fs.createWriteStream(path.join(__dirname, 'download/beach.jpg'));

  try {
    s3.getObject(params).createReadStream().pipe(file);
  } catch (error) {
    res.json(error);
  }
};

module.exports = download;
