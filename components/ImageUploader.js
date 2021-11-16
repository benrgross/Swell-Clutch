import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import S3 from "../lib/AWS";
import axios from "axios";
import { IMAGE_KEY, SIGNED_URL } from "../utils/Actions";
import { useStoreContext } from "../utils/GlobalState";

// get image from uploader
function ImageUploader() {
  const [state, dispatch] = useStoreContext();
  const handleChangeStatus = ({ meta, remove }, status) => {
    console.log(status, meta);
  };
  const handleSubmit = async (files) => {
    const f = files[0];

    // * GET request: presigned URL
    const response = await axios.get(process.env.NEXT_PUBLIC_API_ENDPOINT);

    // store the photo in s3 bucket
    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      headers: {
        ContentType: "image/jpeg, image/png, image/heic, mov/mp4",
      },
      body: f["file"],
    });

    const fileName = response.data.Key;

    const params = {
      Bucket: "swell-clutch",
      Key: fileName,
      Expires: 604800,
    };

    // get signed URL
    const signedURL = await S3.getSignedUrl("getObject", params);

    console.log("url", signedURL);

    //store key and url in global state
    dispatch({
      type: IMAGE_KEY,
      key: fileName,
    });

    dispatch({
      type: SIGNED_URL,
      signedURL: signedURL,
    });
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
