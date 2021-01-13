const aws = require('aws-sdk');
const s3 = new aws.S3();

const getImages = async () => {
  let files = [];
  const data = await s3
    .listObjectsV2({
      Bucket: process.env.BUCKET_NAME,
    })
    .promise();

  if (data && data.Contents) {
    for (let item of data.Contents) {
      files.push(item.Key);
    }
  }
  return files;
};

module.exports = getImages;
