import React from "react";
import { Marker } from "react-map-gl";
import { MarkerWrapper } from "./styles/index";

const MyMarker = () => {
  return (
    <MarkerWrapper>
      <Marker
        latitude={56.01}
        longitude={37.86}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <div>You are here</div>
      </Marker>
    </MarkerWrapper>
  );
};

export default MyMarker;
