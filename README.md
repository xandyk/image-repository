## About the Project

This repo contains my code for the [Shopify 2021 Backend Developer Internship](https://jobs.smartrecruiters.com/ni/Shopify/1529b84e-da5f-49d4-b408-09f0050732be-backend-developer-intern-remote-summer-2021)

The goal for this task is to build an image repository which allows a user to interact with Amazon S3

## Built With

* Express.js
* Node.js


## Getting Started

1. Create a free AWS S3 account at https://aws.amazon.com/s3/

2. Get free Access Key ID and Secret Access Key in My Security Cridentials

3. Clone the repo
```sh
git clone https://github.com/xandyk/image-repository
```

4. Install NPM packages
```sh
cd image-repository
npm install
```

5. In the image-repository folder, create a sub-folder called `config` and create a new file called `keys.env`
   Open `keys.env` and enter the following:
 ```sh
 AWS_ACCESS_KEY_ID= [your access key ID]
 AWS_SECRET_ACCESS_KEY= [You secret access key]
 ```

6. Add dev script to `package.json`
```sh
"dev": "env-cmd -f ./config/keys.env nodemon index.js" 
```

7. Run the app with the following command
```sh
npm run dev
```

## Dependencies
   * aws-sdk: ^2.824.0
   * express: ^4.17.1
   * mongoose: ^5.11.12
   * multer: ^1.4.2
   * multer-s3: ^2.9.0
   * uuid: ^8.3.2
