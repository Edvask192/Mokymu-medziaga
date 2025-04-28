import { useEffect, useState } from "react";
import { MAP_API_KEY } from "../utils/constants";
import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import "./Home.css"
import React from "react";
import { IoColorFill, IoPinSharp } from "react-icons/io5";
import MapContainer from "../components/MapContainer";


const Home = () => {
  const [ipDetails, setIpDetails] = useState({
    ip: null,
    city: null,
    org: null,
    country_name: null
  });
  const [coordinates, setCoordinates] = useState({
    latitude: 55.261909,
    longitude: 24.034855
  });
  const [viewPort, setViewPort] = useState({
    latitude: coordinates.latitude,
    longitude: coordinates.longitude,
    zoom: 5.5,
    width: '100%',
    height: '100%'
  });


  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIpDetails({
          ip: data.ip,
          city: data.region,
          org: data.org,
          country_name: data.country_name
        });
        setCoordinates({
          latitude: data.latitude,
          longitude: data.longitude
        });
      })
    
    .catch(() => {
      //fake data
      setIpDetails({
        ip: '78.60.184.222',
        city: 'Randomas Miestas',
        org: 'TEO',
        country_name: 'Randomas Kauntris'
      });
      setCoordinates({
        latitude: 19.932344,
        longitude: 78.254511
      });
    })
  }, []);

  useEffect(() => {
    const tmpViewport = { ...viewPort };
    tmpViewport.latitude = coordinates.latitude;
    tmpViewport.longitude = coordinates.longitude;
    tmpViewport.zoom = 14;

    setViewPort(tmpViewport);
  }, [coordinates]);

  return (
    <>
      <h1>example</h1>
      <h2>example</h2>
      <h4>example</h4>
      <h1> IP adress finder </h1>
      <p>What is my IP adress?</p>
      <p>{ipDetails?.ip}</p>
      <p>Location:</p>
      <p>
        {ipDetails?.city}, {ipDetails?.country_name}
      </p>
      <p>Internet provider:</p>
      <p>{ipDetails?.org}</p>

      <div className="mapContainer">
        <MapContainer
          latitude={coordinates.latitude}
          longitude={coordinates.longitude}/>
      </div>
    </>
  );
};

export default Home;
