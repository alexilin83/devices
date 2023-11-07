'use client'

import dynamic from 'next/dynamic';

const Map = dynamic(() => import("../src/Map"), { ssr: false });

export default function Home() {
  return (
    <div className='w-full h-full'>
      <Map />
    </div>
  );
}
