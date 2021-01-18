const aws = require('aws-sdk');
const s3 = new aws.S3();

const deleteImage = async (filename) => {

// Delete an image from S3
try {
  await s3
  .deleteObject({
    Bucket: process.env.BUCKET_NAME,
    Key: filename,
  })
  .promise();
return { message: 'OK'};
} catch (error) {
  res.send(error)
}

 
};

module.exports = deleteImage;
