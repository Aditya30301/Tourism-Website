import React, { useState } from "react";

import UploadForm from "../Component/UploadForm";
import ImageGrid from "../Component/ImageGrid";
import Modal from "../Component/Modal";
import Carousel from "../Component/Carousel";
import CarouselSight from "../Component/CarouselSightseeing";
import ImageButton from "../Component/ImageButton";

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
      <h2>
        <center>SightSeeing</center>
      </h2>
      <CarouselSight />
      <ImageButton />
    </div>
  );
}

export default PhotoGallery;
