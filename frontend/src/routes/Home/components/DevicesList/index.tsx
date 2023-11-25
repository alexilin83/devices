import { useLoaderData } from "react-router-dom";
import { Button, Dropdown } from "antd";
import { Device } from "../../../../common/types";
import { SignalIcon, SignalSlashIcon, Battery50Icon, BellIcon } from "@heroicons/react/24/solid";
import { AreaChartOutlined, EllipsisOutlined, SettingOutlined, AimOutlined } from "@ant-design/icons";

export default function DevicesList() {
  const devices = useLoaderData();

  const getMenuItems = (item: Device) => [
    {
      key: "location",
      icon: <AimOutlined />,
      label: "Показать на карте",
      disabled: !item.latitude || !item.longitude,
    },
    {
      key: "dashboard",
      icon: <AreaChartOutlined />,
      label: "Дашборд",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Настройки",
    },
  ];

  const onLocationClick = (latitude: number, longitude: number) => {
    
  };

  if (!Array.isArray(devices)) return false;

  if (!devices.length) return <p>Нет устройств</p>;

  return (
    <>
      {devices.map((device: Device, index: number) => {
        const { number, name, type, signal, battery, latitude, longitude } = device;
        return (
          <div
            key={index}
            className="flex justify-between items-center overflow-hidden mb-1 p-2 bg-white rounded-md shadow-sm text-slate-800 group"
          >
            <div className="flex grow items-center gap-2 overflow-hidden text-xs">
              <div className="basis-2/4">
                <div>{name}</div>
                <div className="text-slate-400">{number}</div>
              </div>
              <div className="overflow-hidden whitespace-nowrap text-ellipsis text-slate-400">{type}</div>
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
              <Dropdown menu={{ items: getMenuItems(device), onClick: () => onLocationClick(latitude, longitude) }} trigger={["click"]}>
                <Button type="text" icon={<EllipsisOutlined />} />
              </Dropdown>
            </div>
          </div>
      )})}
    </>
  );
}
