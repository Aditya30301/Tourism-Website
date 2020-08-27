import React, { useState } from "react";

import UploadForm from "../Component/UploadForm";
import ImageGrid from "../Component/ImageGrid";
import Modal from "../Component/Modal";
import Carousel from "../Component/Carousel";

function PhotoGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="PhotoGR">
      <Carousel />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default PhotoGallery;
