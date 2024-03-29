import React, { useState } from "react";
import ProgressBar from "../Component/ProgressBar";
import "./Upload.css";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <div className="container-fluid nav_bg" container>
      <div className="row">
        <div className="col-10 mx-auto"></div>
        <form>
          <label>
            <input type="file" onChange={handleChange} />
            <span>+</span>
          </label>
          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && <ProgressBar file={file} setFile={setFile} />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
