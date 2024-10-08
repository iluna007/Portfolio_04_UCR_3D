import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./home";
import Raster from "./raster";
import Pointcloud from "./pointcloud";
import Model from "./model";
import Footer from "./components/Footer";
import Flujo_cc from "./flujo_cc";
import Flujo_rr from "./flujo_rr";
import Flujo_imprimir3d from "./flujo_imprimir3d";
import Flujo_web_ellipsis from "./flujo_web_ellipsis";
import Flujo_web_leaflet from "./flujo_web_leaflet";
import Flujo_web_speckle from "./flujo_web_speckle";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/raster" element={<Raster />} />
            <Route path="/pointscloud" element={<Pointcloud />} />
            <Route path="/model" element={<Model />} />
            <Route path="/flujo_cc" element={<Flujo_cc />} />
            <Route path="/flujo_rr" element={<Flujo_rr />} />
            <Route path="/flujo_imprimir3d" element={<Flujo_imprimir3d />} />
            <Route
              path="/flujo_web_ellipsis"
              element={<Flujo_web_ellipsis />}
            />
            <Route path="/flujo_web_leaflet" element={<Flujo_web_leaflet />} />
            <Route path="/flujo_web_speckle" element={<Flujo_web_speckle />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
