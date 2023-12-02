import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import { useMap } from "react-leaflet";
import { Button, Dropdown } from "antd";
import { Device } from "../../../../common/types";
import { deviceTypes } from "../../../../common/constants";
import { SignalIcon, SignalSlashIcon, Battery50Icon, BellIcon } from "@heroicons/react/24/solid";
import { AreaChartOutlined, EllipsisOutlined, SettingOutlined, AimOutlined } from "@ant-design/icons";

export default function DevicesList() {
  const { deviceId } = useParams();
  const devices = useLoaderData();

  const navigate = useNavigate();

  const map = useMap();

  const getMenuItems = (item: Device) => [
    {
      key: "location",
      icon: <AimOutlined />,
      label: "Показать расположение",
      disabled: !item.latitude || !item.longitude,
      onClick: () => {
        const size = map.getSize();
        map.flyToBounds([[item.longitude, item.latitude]], {
          maxZoom: 12,
          paddingTopLeft: [400, 0],
          paddingBottomRight: [0, deviceId ? size.y * 0.5 : 0],
        });    
      }
    },
    {
      key: "dashboard",
      icon: <AreaChartOutlined />,
      label: "Дашборд",
      onClick: () => {
        navigate(`/devices/${item._id}`)
      }
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Настройки",
      onClick: () => {
        navigate(`/devices/${item._id}/edit`)
      }
    },
  ];

  if (!Array.isArray(devices)) return false;

  return (
    <>
      {devices.map((device: Device) => {
        const { _id, number, name, type, signal, battery } = device;
        return (
          <div
            key={_id}
            className="flex justify-between items-center overflow-hidden mb-1 p-2 bg-white rounded-md shadow-sm group"
          >
            <div className="flex grow items-center gap-2 overflow-hidden text-xs">
              <div className="basis-2/4">
                <div>{number}</div>
                <div className="text-slate-400">{name}</div>
              </div>
              <div className="overflow-hidden whitespace-nowrap text-ellipsis text-slate-400">{deviceTypes[type]}</div>
            </div>
            <div className="flex shrink-0 items-center gap-1 pl-2 text-slate-400">
              <div className="flex gap-2">
                {signal ? (
                  <SignalIcon className="w-4 h-4 text-lime-300" />
                ) : (
                  <SignalSlashIcon className="w-4 h-4 text-red-500" />
                )}
                <Battery50Icon className={`w-4 h-4 ${!battery ? "" : ""}`} />
                <BellIcon className="w-4 h-4" />
              </div>
              <Dropdown
                menu={{ items: getMenuItems(device) }}
                trigger={["click"]}
              >
                <Button type="text" icon={<EllipsisOutlined />} />
              </Dropdown>
            </div>
          </div>
        );
      })}
    </>
  );
}
