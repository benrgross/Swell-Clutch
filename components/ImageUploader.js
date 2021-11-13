import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import S3 from "../lib/AWS";
import axios from "axios";

function ImageUploader() {
  const handleChangeStatus = ({ meta, remove }, status) => {
    console.log(status, meta);
  };
  const handleSubmit = async (files) => {
    const f = files[0];
    console.log(f["file"]);
    // * GET request: presigned URL
    const response = await axios.get(
      `https://11k2bj0e8j.execute-api.us-east-2.amazonaws.com/default/getPresignedImageURL`
    );

    console.log("Response: ", response);

    // * PUT request: upload file to S3

    // follow youtube for https://www.youtube.com/watch?v=V45ymCXBpUM
    // movie call to api backend.
    // use the S3 client
    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      headers: {
        ContentType: "image/jpeg, image/png, image/heic, mov/mp4",
      },
      body: f["file"],
    });
    console.log("Result: ", result);

    const fileName = response.data.Key;

    const params = {
      Bucket: "swell-clutch",
      Key: fileName,
      Expires: 500,
    };

    const signedURL = S3.getSignedUrl("getObject", params);

    console.log("url", signedURL);
  };

  return (
    <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      hello
      maxFiles={1}
      multiple={false}
      canCancel={false}
      inputContent="Add A Photo"
      styles={{
        dropzone: { width: 200, height: 10 },
        dropzoneActive: { borderColor: "green" },
      }}
    />
  );
}

export default ImageUploader;
