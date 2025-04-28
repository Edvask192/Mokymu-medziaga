import Home from "./pages/Home";
import { useEffect, useState } from "react";
import "./App.css";
import Map, { Popup, Marker } from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {

  const API_KEY =
    "pk.eyJ1IjoiZGFsZXg5MjEiLCJhIjoiY205djI1MWNpMGVxZTJwczY4b3FsY3UwaiJ9.ylfeJS2w4r5WfoXu9J5acQ";
  
  return (
    <>
      <Home />
    </>
  )
}

export default App;





// issaugoti duomenys
// {ip: "2a00:1eb8:c053:bf38:71f5:163:443a:15a0", network: "2a00:1eb8:c050::/44", version: "IPv6",…}
// asn
// : 
// "AS8764"
// city
// : 
// "Vilnius"
// continent_code
// : 
// "EU"
// country
// : 
// "LT"
// country_area
// : 
// 65200
// country_calling_code
// : 
// "+370"
// country_capital
// : 
// "Vilnius"
// country_code
// : 
// "LT"
// country_code_iso3
// : 
// "LTU"
// country_name
// : 
// "Lithuania"
// country_population
// : 
// 2789533
// country_tld
// : 
// ".lt"
// currency
// : 
// "EUR"
// currency_name
// : 
// "Euro"
// in_eu
// : 
// true
// ip
// : 
// "2a00:1eb8:c053:bf38:71f5:163:443a:15a0"
// languages
// : 
// "lt,ru,pl"
// latitude
// : 
// 54.6876
// longitude
// : 
// 25.2806
// network
// : 
// "2a00:1eb8:c050::/44"
// org
// : 
// "Telia Lietuva, AB"
// postal
// : 
// "14004"
// region
// : 
// "Vilnius"
// region_code
// : 
// "VL"
// timezone
// : 
// "Europe/Vilnius"
// utc_offset
// : 
// "+0300"
// version
// : 
// "IPv6"