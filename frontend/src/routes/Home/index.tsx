import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Button, Modal } from "antd";
import DevicesList from "./components/DevicesList";
import Map from "./components/Map";
import CreateDeviceFrom from "../Home/components/CreateDeviceFrom";
import { PlusOutlined } from '@ant-design/icons';

export default function HomePage() {
  const devices = useLoaderData();

  const [isCreateDevicePopupVisible, setIsCreateDevicePopupVisible] = useState(false);

  return (
    <>
      <div className="absolute inset-y-2 left-2 overflow-auto w-[400px] p-5 bg-white/90 rounded-lg shadow-md z-10">
        <div className="flex justify-between items-center mb-5">
          <h3>Устройства:</h3>
          <div>
            <Button shape="circle" icon={<PlusOutlined />} size="small" onClick={() => setIsCreateDevicePopupVisible(true)} />
          </div>
        </div>
        {Array.isArray(devices) ? <DevicesList devices={devices} /> : <p>Нет устройств</p>}
      </div>
      <div className="relative h-full z-0">
        <Map />
      </div>
      <Modal open={isCreateDevicePopupVisible} title="Добавить устройство" onOk={() => setIsCreateDevicePopupVisible(false)} onCancel={() => setIsCreateDevicePopupVisible(false)}>
        <CreateDeviceFrom />
      </Modal>
    </>
  );
}
