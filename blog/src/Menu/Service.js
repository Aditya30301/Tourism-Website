import React from "react";
import Cards from "../Component/Cards";
import datas from "./CardData";
const Service = () => {
  const cardObject = datas.map(function (data) {
    return (
      <Cards
        key={data.id}
        name={data.name}
        duration={data.duration}
        description={data.description}
        fullDescription1={data.fullDescription1}
        fullDescription2={data.fullDescription2}
        fullDescription3={data.fullDescription3}
        fullDescription4={data.fullDescription4}
        fullDescription5={data.fullDescription5}
        fullDescription6={data.fullDescription6}
        fullDescription7={data.fullDescription7}
        fullDescription8={data.fullDescription8}
        imageLink={data.imageLink}
      />
    );
  });

  return (
    <>
      <div className="container-fluid nav_bg" container>
        <div className="row">
          <div className="col-10 mx-auto align-items-center">
            <h1>
              <center>Our Services</center>
              {cardObject}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
