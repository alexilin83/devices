"use client";

import { useState } from 'react';
import { Device } from '../../types';
import IconButton from '../IconButton';
import Popup from '../Popup';
import { PlusSmallIcon } from '@heroicons/react/24/solid';

interface DevicesListProps {
  devices: Device[];
}

export default function DevicesList(props: DevicesListProps) {
    const {devices} = props;
    const [isCreateDevicePopupVisible, setIsCreateDevicePopupVisible] = useState(false);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2>Устройства:</h2>
        <div>
          <IconButton size='small' variant='secondary' onClick={() => setIsCreateDevicePopupVisible(true)}>
            <PlusSmallIcon />
          </IconButton>
        </div>
      </div>
      {devices.map((item: Device) => (
        <div key={item.number}>{item.number}</div>
      ))}
      {isCreateDevicePopupVisible &&
        <Popup title="Добавить устройство" onClose={() => setIsCreateDevicePopupVisible(false)}>
          попап
        </Popup>
      }
    </div>
  );
}
