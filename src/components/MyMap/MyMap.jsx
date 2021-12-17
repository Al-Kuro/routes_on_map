import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { MapWrapper } from "./styles/index";
import MyMarker from "../MyMarker/MyMarker";
import { Room } from "@mui/icons-material";

const MyMap = () => {
  const [viewport, setViewport] = useState({
    width: 600,
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <MapWrapper>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <MyMarker>
          <Room />
        </MyMarker>
      </ReactMapGL>
    </MapWrapper>
  );
};

export default MyMap;
