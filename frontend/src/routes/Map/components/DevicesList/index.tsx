import { Suspense, useEffect } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { useMap } from "react-leaflet";
import { Button, Empty, Spin } from "antd";
import { SignalIcon, SignalSlashIcon, Battery50Icon, BellIcon } from "@heroicons/react/24/solid";
import { PlusOutlined } from "@ant-design/icons";
import L from "leaflet";
import { deviceTypes } from "../../../../common/constants";
import { Device } from "../../../../common/types";

export default function DevicesList() {
  const devices = useLoaderData();
  const navigate = useNavigate();

  const map = useMap();

  useEffect(() => {
    const el = document.getElementById("map-sidebar");
    if (el) {
      L.DomEvent.disableClickPropagation(el);
      L.DomEvent.disableScrollPropagation(el);
    }
  }, []);

  if (!Array.isArray(devices)) return false;

  return (
    <div
      id="map-sidebar"
      className="shrink-0 h-full overflow-auto w-[400px] p-5 bg-slate-100/90 rounded-lg shadow-md cursor-default"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="m-0">Устройства:</h3>
        <div>
          <Button shape="circle" icon={<PlusOutlined />} onClick={() => navigate("/devices/create")} />
        </div>
      </div>
      {Array.isArray(devices) && devices.length ? (
        devices.map((device: Device) => {
          const { _id, number, name, type, signal, battery, latitude, longitude } = device;
          return (
            <NavLink
              key={_id}
              to={`/devices/${_id}`}
              className={({ isActive }) =>
                `flex justify-between items-center overflow-hidden min-h-[50px] mb-1 py-1.5 px-2 rounded-md shadow-sm !text-inherit hover:bg-slate-300 ${
                  isActive ? "bg-blue-500 !text-white hover:!bg-blue-500" : "bg-white"
                }`
              }
              onClick={() => {
                if (latitude && longitude) {
                  const size = map.getSize();
                  map.fitBounds([[longitude, latitude]], {
                    maxZoom: 12,
                    paddingTopLeft: [400, size.y * 0.66],
                    paddingBottomRight: [0, 0],
                  });
                }
              }}
            >
              <div className="flex grow items-center gap-2 overflow-hidden text-xs">
                <div className="basis-2/4">
                  <div>{number}</div>
                  <div>{name}</div>
                </div>
                <div className="overflow-hidden whitespace-nowrap text-ellipsis">{deviceTypes[type]}</div>
              </div>
              <div className="flex shrink-0 items-center gap-1 pl-2">
                <div className="flex gap-2">
                  {signal ? <SignalIcon className="w-4 h-4" /> : <SignalSlashIcon className="w-4 h-4" />}
                  <Battery50Icon className={`w-4 h-4 ${!battery ? "" : ""}`} />
                  <BellIcon className="w-4 h-4" />
                </div>
              </div>
            </NavLink>
          );
        })
      ) : (
        <Empty description="Нет добавленных устройств">
          <Button type="primary" onClick={() => navigate("/devices/create")}>
            Добавить
          </Button>
        </Empty>
      )}
    </div>
  );
}
