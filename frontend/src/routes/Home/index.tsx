import { useState } from "react";
import { useSubmit, ActionFunctionArgs } from "react-router-dom";
import { Button, Modal, Form } from "antd";
import DevicesList from "./components/DevicesList";
import Map from "./components/Map";
import CreateDeviceFrom from "../Home/components/CreateDeviceFrom";
import { PlusOutlined } from "@ant-design/icons";
import { createDevice } from "../../common/actions";

export async function action(data: ActionFunctionArgs) {
  console.log(111);
  const device = await createDevice(data);
  return { device };
}

export default function HomePage() {
  const [form] = Form.useForm();

  const submit = useSubmit();

  const [isCreateDevicePopupVisible, setIsCreateDevicePopupVisible] = useState(false);

  return (
    <>
      <div className="absolute inset-y-2 left-2 overflow-auto w-[400px] p-5 bg-slate-100/90 rounded-lg shadow-md z-10">
        <div className="flex justify-between items-center mb-5">
          <h3>Устройства:</h3>
          <div>
            <Button
              shape="circle"
              icon={<PlusOutlined />}
              size="small"
              onClick={() => setIsCreateDevicePopupVisible(true)}
            />
          </div>
        </div>
        <div className="mx-[-10px]">
          <DevicesList />
        </div>
      </div>
      <div className="relative h-full z-0">
        <Map />
      </div>
      <Modal
        open={isCreateDevicePopupVisible}
        title="Добавить устройство"
        cancelText="Отменить"
        okText="Сохранить"
        onOk={() => {
          submit(form.getFieldsValue(), { method: "post" });
          form.resetFields();
          setIsCreateDevicePopupVisible(false);
        }}
        onCancel={() => setIsCreateDevicePopupVisible(false)}
      >
        <CreateDeviceFrom form={form} />
      </Modal>
    </>
  );
}
