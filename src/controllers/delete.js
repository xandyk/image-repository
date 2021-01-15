const aws = require('aws-sdk');
const s3 = new aws.S3();

const deleteImage = async () => {
  await s3
    .deleteObject({
      Bucket: process.env.BUCKET_NAME,
      Key: 'beach.jpg',
    })
    .promise();
  return { message: 'OK' };
};

module.exports = deleteImage;
