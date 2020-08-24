import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGluZXNoLWxhbDI5IiwiYSI6ImNrZThxczdyMjB6ZDQycm1pZ3RkbDZ6aGsifQ.uIh-N1d3yewYMGDjDEb4uQ";

export default class Navigate extends React.Component {
  mapRef = React.createRef();

  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 92.7199291,
      lat: 11.7042913,
      zoom: 10,
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapRef.current,
      style: "mapbox://styles/dinesh-lal29/cke8u17at08fw19mqzp2vbnor",
      center: [lng, lat],
      zoom,
    });

    map.on("move", () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2),
      });
    });
  }

  render() {
    const { lng, lat, zoom } = this.state;

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div
          style={{ width: "100vw", height: "85vh" }}
          ref={this.mapRef}
          className="absolute top right left bottom"
        />
      </div>
    );
  }
}
