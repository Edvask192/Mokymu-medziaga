import { useEffect, useState } from "react";
import Map, { Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import "./Home.css"
import MapContainer from "../components/MapContainer";
import LabelWithTitle from "../components/LabelWithTitle";


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
      <h1>example basis</h1>
      <LabelWithTitle
        title='IP adress finder'
        type='primary'
        align='center'
      />

      <LabelWithTitle
        title='What is my IP adress?'
        type='secondary'
        body={ipDetails.ip}
        align='left'
      />

      <LabelWithTitle
        title='Location'
        type='default'
        body={ipDetails.city + ', ' + ipDetails.country_name}
        align='left'
      />

      <LabelWithTitle
        title='Internet provider'
        type='primary'
        body={ipDetails.org}
        align='right'
      />


      <div className="mapContainer">
        <MapContainer
          latitude={coordinates.latitude}
          longitude={coordinates.longitude} />
      </div>
    </>
  );
};

export default Home;
