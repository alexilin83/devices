import dynamic from 'next/dynamic';
import DevicesList from '../src/components/DevicesList';

const Map = dynamic(() => import("../src/components/Map"), { ssr: false });

export default async function Home() {

  async function getDevices() {
    const res = await fetch("http://localhost:5000/api/devices");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }

  const devices = await getDevices();

  return (
    <div className='relative w-full h-full'>
      <div className='absolute inset-y-5 left-5 w-[400px] p-5 bg-white/95 rounded-lg shadow-md z-10'>
        <DevicesList devices={devices} />
      </div>
      <div className='relative w-full h-full z-0'>
        <Map />
      </div>
    </div>
  );
}
