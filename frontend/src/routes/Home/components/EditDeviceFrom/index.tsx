import { Button, Form, Input, Select } from "antd";
import { useLoaderData, useSubmit, ActionFunctionArgs } from "react-router-dom";
import { updateDevice } from "../../../../common/actions";
import { Device } from "../../../../common/types";

type FieldType = Omit<Device, "_id, address, battery, signal">;

export async function action(data: ActionFunctionArgs) {
  const device = await updateDevice(data);
  return device;
}

export default function EditDeviceForm() {
  const device = useLoaderData() as Device;

  const submit = useSubmit();

  const initialValues = {
    ...device,
    latitude: device.latitude || "",
    longitude: device.latitude || "",
  };

  const typeOptions = [
    {
      value: "sensor",
      label: "Сенсор",
    },
    {
      value: "hub",
      label: "Хаб",
    },
  ];

  const handleSubmit = (values: FieldType) => {
    submit(values, { method: "patch" });
  };

  return (
    <>
      <h2>Редактирование устройства "{device.number}"</h2>
      <Form
        initialValues={initialValues}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={handleSubmit}
      >
        <Form.Item<FieldType> label="Номер" name="number" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item<FieldType> label="Название" name="name">
          <Input />
        </Form.Item>
        <Form.Item<FieldType> label="Тип" name="type">
          <Select options={typeOptions} />
        </Form.Item>
        <Form.Item<FieldType> label="Долгота" name="longitude">
          <Input />
        </Form.Item>
        <Form.Item<FieldType> label="Широта" name="latitude">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
