import AWS from "aws-sdk";

const S3 = new AWS.S3({
  signatureVersion: "v4",
  region: "us-east-2",
  credentials: {
    accessKeyId: "AKIAZSP3BP5HS7E2ZTJW",
    secretAccessKey: "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",
  },
});

export default S3;
