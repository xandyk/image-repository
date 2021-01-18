## About the Project

This repo contains my code for the [Shopify 2021 Backend Developer Internship](https://jobs.smartrecruiters.com/ni/Shopify/1529b84e-da5f-49d4-b408-09f0050732be-backend-developer-intern-remote-summer-2021)

The goal for this task is to build an image repository which allows a user to upload a single image or an enormous amount images.


## Built with

* Express.js
* Node.js


## Getting Started

1. Clone the repo
```sh
git clone https://github.com/xandyk/image-repository
```

2. Install NPM packages
```sh
cd image-repository
npm install
```
3. Store AWS S3 security credentials to a config folder and name the file to `keys.env`
  * Access Key ID
  * Secret Access Key

4. Add dev script to package.json
```sh
"dev": "env-cmd -f ./config/keys.env nodemon index.js" 
```

## Dependencies
   * aws-sdk: ^2.824.0
   * express: ^4.17.1
   * mongoose: ^5.11.12
   * multer: ^1.4.2
   * multer-s3: ^2.9.0
   * uuid: ^8.3.2
