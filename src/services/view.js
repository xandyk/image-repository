const aws = require('aws-sdk');

aws.config.setPromisesDependency();
aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.REGION,
});

const viewImages = async (req, res) => {
  try {
    aws.config.setPromisesDependency();
    aws.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.REGION,
    });

    const s3 = new aws.S3();

    const response = await s3
      .listObjectsV2({
        Bucket: process.env.BUCKET_NAME,
      })
      .promise();

    data = response.Contents;
    const photos = data.map(photo => {
      return photo.Key;
    });
    console.log(photos);
  } catch (error) {
    console.log('Error', error);
  }
};

module.exports = viewImages;
