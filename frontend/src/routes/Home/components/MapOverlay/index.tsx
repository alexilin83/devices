import { useState } from "react";
import { Outlet, useSubmit, useLoaderData } from "react-router-dom";
import { useMap } from "react-leaflet";
import { Button, Modal, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import DevicesList from "../DevicesList";
import CreateDeviceFrom from "../CreateDeviceFrom";

export default function HomePage() {
  const devices = useLoaderData();

  const map = useMap();

  const [form] = Form.useForm();
  const submit = useSubmit();

  const [isCreateDevicePopupVisible, setIsCreateDevicePopupVisible] = useState(false);

  const handleMouseOver = () => {
    map.dragging.disable();
    map.scrollWheelZoom.disable();
  }
  const handleMouseOut = () => {
    map.dragging.enable();
    map.scrollWheelZoom.enable();
  }

  return (
    <>
      <div className="flex items-end gap-2 absolute inset-0 w-full h-full p-2 z-[1000]">
        <div className="shrink-0 h-full overflow-auto w-[400px] p-5 bg-slate-100/90 rounded-lg shadow-md cursor-default" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <div className="flex justify-between items-center mb-2">
            <h3 className="m-0">Устройства:</h3>
            <div>
              <Button
                shape="circle"
                icon={<PlusOutlined />}
                onClick={() => setIsCreateDevicePopupVisible(true)}
              />
            </div>
          </div>
          {Array.isArray(devices) && devices.length ? (
            <DevicesList />
          ) : (
            <div className="text-center">
              <p>Вы не добавили устройства.</p>
              <Button onClick={() => setIsCreateDevicePopupVisible(true)}>Добавить</Button>
            </div>
          )}
        </div>
        <Outlet />
      </div>
      <Modal
        open={isCreateDevicePopupVisible}
        title="Добавить устройство"
        cancelText="Отменить"
        okText="Сохранить"
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              submit(values, { method: "post" });
              setIsCreateDevicePopupVisible(false);
              form.resetFields();
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
        onCancel={() => setIsCreateDevicePopupVisible(false)}
      >
        <CreateDeviceFrom form={form} />
      </Modal>
    </>
  );
}
