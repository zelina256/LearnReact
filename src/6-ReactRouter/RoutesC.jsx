import React from "react";
import FunctionComponent from "./1-Components/FunctionComponent";
import RulesJSX from "./2-Jsx/Rules/RulesJSX";
import { Routes, Route } from "react-router-dom";

const RoutesC = () => {
  return (
    <div>
      <Routes>
        <Route path="/component" element={<FunctionComponent />} />
        <Route path="/rules" element={<RulesJSX />} />
      </Routes>
    </div>
  );
};

export default RoutesC;
