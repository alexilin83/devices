import { NavLink, useLoaderData } from "react-router-dom";
import { useMap } from "react-leaflet";
import { Device } from "../../../../common/types";
import { deviceTypes } from "../../../../common/constants";
import { SignalIcon, SignalSlashIcon, Battery50Icon, BellIcon } from "@heroicons/react/24/solid";

export default function DevicesList() {
  const devices = useLoaderData();

  const map = useMap();

  if (!Array.isArray(devices)) return false;

  return (
    <>
      {devices.map((device: Device) => {
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
                {signal ? (
                  <SignalIcon className="w-4 h-4" />
                ) : (
                  <SignalSlashIcon className="w-4 h-4" />
                )}
                <Battery50Icon className={`w-4 h-4 ${!battery ? "" : ""}`} />
                <BellIcon className="w-4 h-4" />
              </div>
            </div>
          </NavLink>
        );
      })}
    </>
  );
}
