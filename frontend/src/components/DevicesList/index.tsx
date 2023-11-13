"use client";

import { useState } from "react";
import { Device } from "../../types";
import IconButton from "../IconButton";
import Popup from "../Popup";
import FormControl from "../FormControl";
import Input from "../Input";
import Select from "../Select";
import {
  PlusSmallIcon,
  ListBulletIcon,
  SignalIcon,
  SignalSlashIcon,
  Battery50Icon,
  BellIcon,
  Cog6ToothIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

interface DevicesListProps {
  devices: Device[];
}

export default function DevicesList(props: DevicesListProps) {
  const { devices } = props;
  const [isCreateDevicePopupVisible, setIsCreateDevicePopupVisible] =
    useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-1 text-slate-700">
          <ListBulletIcon className="h-6 w-6" />
          <h3>Устройства:</h3>
        </div>
        <div>
          <IconButton
            variant="secondary"
            size="small"
            onClick={() => setIsCreateDevicePopupVisible(true)}
          >
            <PlusSmallIcon />
          </IconButton>
        </div>
      </div>
      {devices.map(({ number, name, type, signal, battery }: Device) => (
        <div
          key={number}
          className="flex justify-between items-center overflow-hidden text-slate-800 group"
        >
          <div className="flex shrink items-center gap-2 overflow-hidden text-xs">
            <div>
              <div>{name}</div>
              <div className="text-slate-400">{number}</div>
            </div>
            <div className="overflow-hidden whitespace-nowrap text-ellipsis text-slate-400">
              {type}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1 pl-2 text-slate-400 translate-x-[52px] transition-all group-hover:translate-x-0">
            <div className="flex gap-2">
              {signal ? (
                <SignalIcon className="w-4 h-4 text-lime-300" />
              ) : (
                <SignalSlashIcon className="w-4 h-4 text-yellow-500" />
              )}
              <Battery50Icon className={`w-4 h-4 ${!battery ? "" : ""}`} />
              <BellIcon className="w-4 h-4" />
            </div>
            <div className="flex gap-1 transition-all">
              <IconButton variant="secondary" size="small">
                <PresentationChartLineIcon />
              </IconButton>
              <IconButton variant="secondary" size="small">
                <Cog6ToothIcon />
              </IconButton>
            </div>
          </div>
        </div>
      ))}
      <Popup
        open={isCreateDevicePopupVisible}
        title="Добавить устройство"
        onClose={() => setIsCreateDevicePopupVisible(false)}
      >
        <form action="">
          <FormControl>
            <label>Номер</label>
            <Input name="number" type="number" />
          </FormControl>
          <FormControl>
            <label>Название</label>
            <Input name="name" type="text" />
          </FormControl>
          <FormControl>
            <label>Тип</label>
            <Select name="type">
              <option value="sensor">Sensor</option>
              <option value="hub">Hub</option>
            </Select>
          </FormControl>
          <FormControl>
            <label>Долгота</label>
            <Input name="longitude" type="number" />
          </FormControl>
          <FormControl>
            <label>Широта</label>
            <Input name="latitude" type="number" />
          </FormControl>
        </form>
      </Popup>
    </div>
  );
}
