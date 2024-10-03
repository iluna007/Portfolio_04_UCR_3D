import React, { useEffect, useRef } from "react";
import L from "leaflet";

const Map_1 = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      // If the map instance is already initialized, do nothing
      return;
    }

    // Initialize the map and set the initial view
    mapRef.current = L.map("map").setView(
      [9.890430504934573, -84.03438748126763],
      16
    );

    // Define the base layers
    const basemap = L.tileLayer(
      "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 22,
      }
    );

    const esri = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    );

    const topo = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
    );

    const rgb = L.tileLayer(
      "https://api.ellipsis-drive.com/v3/path/062f687f-30ec-48e0-85c7-be005fe747e2/raster/timestamp/e6388b85-d1bb-402e-9edb-19ee245ea0fe/tile/{z}/{x}/{y}?style=5202daeb%2dec2c%2d4cfb%2d9f0c%2db5fd868730c2&token=at_S5UmIhfYNXTUbLPYal5bJeWFKVRNDPuRtVc1VPzoZxLIEuZ9xRnJUBhQBOufw4H",
      {
        attribution:
          'Map data from Escuela de Geografía,UCR; <a href="https://www.geografia.fcs.ucr.ac.cr/index.php/es/">Dr.Pascal Girot Pignot</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
        maxZoom: 23,
      }
    );

    // Add the base layer to the map
    basemap.addTo(mapRef.current);

    // Add markers to the map
    const marker1 = L.marker([9.889718, -84.037271]).bindPopup(
      "Entrada A del parque"
    );
    const marker2 = L.marker([9.889955333454145, -84.03392571430172]).bindPopup(
      "Entrada B del parque"
    );

    // Add a popup to the map
    const popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mapRef.current);
    }

    // Use mapRef.current to add the click event listener
    mapRef.current.on("click", onMapClick);

    // Add additional layers to the map
    rgb.addTo(mapRef.current);

    // Define base layers for layer control
    const baseLayers = {
      "OSM basemap": basemap,
      "ESRI Imagery": esri,
      "Topo Map": topo,
    };

    // Define overlay layers for layer control
    const overlayLayers = {
      "RGB Layer": rgb,
      "Acceso A": marker1,
      "Acceso B": marker2,
    };

    // Add layer control to the map
    L.control.layers(baseLayers, overlayLayers).addTo(mapRef.current);

    // Cleanup function to remove the map instance when the component is unmounted
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default Map_1;
