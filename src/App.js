import React from "react";
import MyMap from "./components/MyMap/MyMap";
import RoutesOnMap from "./components/RoutesOnMap/RoutesOnMap";
import { AppWrapper } from "./styles/index";

const App = () => {
  return (
    <AppWrapper>
      <RoutesOnMap />
      <MyMap />
    </AppWrapper>
  );
};

export default App;
