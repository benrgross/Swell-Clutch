import AWS from "aws-sdk";

const S3 = new AWS.S3({
  signatureVersion: "v4",
  region: "us-east-2",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_KEY,
  },
});

export default S3;
