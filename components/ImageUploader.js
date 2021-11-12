import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

function ImageUploader() {
  const handleChangeStatus = ({ meta, remove }, status) => {
    console.log(status, meta);
  };
  const handleSubmit = async (files) => {
    const f = files[0];
    console.log(f["file"]);
    // * GET request: presigned URL
    const response = await axios({
      method: "GET",
      url: API_ENDPOINT,
    });

    console.log("Response: ", response);

    // * PUT request: upload file to S3
    const result = await fetch(response.data.uploadURL, {
      method: "PUT",
      body: f["file"],
    });
    console.log("Result: ", result);
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
