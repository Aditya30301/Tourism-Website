import React from "react";

const CarouselSightseeing = () => {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/tourismweb-3e2b8.appspot.com/o/have.jpg?alt=media&token=6b071eb7-5cca-4956-81db-a36d8aa26e76"
            class="d-block w-100"
            alt="img1"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.thrillophilia.com/image/upload/s--0UwsGUzn--/c_fill,f_auto,fl_strip_profile,h_600,q_auto,w_975/v1/images/photos/000/006/013/original/1488289500_Scuba-Diving-Goa_1446210558.jpg.jpg?1488289500"
            class="d-block w-100"
            alt="img2"
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://holidayhai.com/media/cache/53/5e/535e91ca6f7a71cf20c756b55cd49d04.jpg"
            class="d-block w-100"
            alt="img3"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleFade"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleFade"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default CarouselSightseeing;
