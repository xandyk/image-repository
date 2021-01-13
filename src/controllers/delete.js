const aws = require('aws-sdk');
const s3 = new aws.S3();

const deleteImage = async () => {
  await s3
    .deleteObject({
      Bucket: process.env.BUCKET_NAME,
      Key: 'Screen Shot 2021-01-12 at 6.36.27 PM.png',
    })
    .promise();
  return {};
};

module.exports = deleteImage;
