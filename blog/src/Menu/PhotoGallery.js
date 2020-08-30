import React, { useState } from "react";

import UploadForm from "../Component/UploadForm";
import ImageGrid from "../Component/ImageGrid";
import Modal from "../Component/Modal";
import Carousel from "../Component/Carousel";
import CarouselSight from "../Component/CarouselSightseeing";
import ImageButton from "../Component/ImageButton";

import React360 from "../Component/ParaImg";
function PhotoGallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="PhotoGR">
      <div className="row">
        <div className="col-10 mx-auto"></div>
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
        <React360 />
      </div>
    </div>
  );
}

export default PhotoGallery;
