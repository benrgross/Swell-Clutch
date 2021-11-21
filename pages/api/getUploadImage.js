// import { UsingJoinColumnIsNotAllowedError } from "typeorm";
// import S3 from "../../lib/AWS";
// import axios from "axios";

// export default async function handle(req, res) {
//   console.log("f", req.body);
//   if (req.method === "POST") {
//     const response = await axios.get(
//       `https://11k2bj0e8j.execute-api.us-east-2.amazonaws.com/default/getPresignedImageURL`
//     );

//     console.log("Response: ", response);

//     // * PUT request: upload file to S3

//     // follow youtube for https://www.youtube.com/watch?v=V45ymCXBpUM
//     // movie call to api backend.
//     // use the S3 client
//     const result = await fetch(response.data.uploadURL, {
//       method: "PUT",
//       headers: {
//         ContentType: "image/jpeg, image/png, image/heic, mov/mp4",
//       },
//       body: req.body.file[0].file,
//     });
//     console.log("Result: ", result);

//     const fileName = response.data.Key;

//     const params = {
//       Bucket: "swell-clutch",
//       Key: fileName,
//       Expires: 604800,
//     };

//     const signedURL = S3.getSignedUrl("getObject", params);

//     console.log("url", signedURL);
//     res.json(signedURL);
//   }
// }
