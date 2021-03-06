import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import pin from "../../assets/pin.png";
import "./Map.scss";

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default;

const Map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 48.9215,
    longitude: 24.70972,
    zoom: 16,
  });
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
      mapStyle={"mapbox://styles/orzen/ckmm3nc7i17av17rmybwnhmma"}
    >
      <Marker latitude={48.9215} longitude={24.70972}>
        <img src={pin} alt="pin" />
      </Marker>
    </ReactMapGL>
  );
};

export default Map;
