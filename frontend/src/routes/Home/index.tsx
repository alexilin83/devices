import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DevicesList from './components/DevicesList';
import Map from './components/Map';

const mapStyles:React.CSSProperties = {
  position: 'relative',
  height: '100%',
  zIndex: 0
}

const sidePanelStyles:React.CSSProperties = {
  position: 'absolute',
  left: '10px',
  top: '10px',
  bottom: '10px',
  width: '400px',
  padding: '10px',
  background: 'rgba(255, 255, 255, .9)',
  borderRadius: '10px',
  zIndex: 10
}

export default function HomePage() {

  const devices = useLoaderData();
  console.log(devices);
  

  return (
    <>
      <div style={sidePanelStyles} className='absolute inset-y-5 left-5 w-[400px] p-5 bg-white/95 rounded-lg shadow-md z-10'>
        {/* <DevicesList devices={devices} /> */}
      </div>
      <div style={mapStyles}>
        <Map />
      </div>
    </>
  );
}
