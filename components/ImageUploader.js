import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import S3 from "../lib/AWS";
import axios from "axios";
// import server from "../config";

// get image from uploader
function ImageUploader() {
  const handleChangeStatus = ({ meta, remove }, status) => {
    console.log(status, meta);
  };
  const handleSubmit = async (files) => {
    const f = files[0];
    console.log(f["file"]);

    // * GET request: presigned URL
    const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT);

    console.log("Response: ", response);
    // store
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
      Expires: 604800,
    };

    const signedURL = S3.getSignedUrl("getObject", params);

    console.log("url", signedURL);

    // next steps are to store key or file path in back end.
    // retrieve key, get signed URL
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
