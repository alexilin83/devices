import { Button, Form, Input, Select } from "antd";
import { Link, useLoaderData, useSubmit, ActionFunctionArgs } from "react-router-dom";
import { Breadcrumb } from "antd";
import Container from "../../common/components/Layout/Container";
import { updateDevice } from "../../common/actions";
import { deviceTypes } from "../../common/constants";
import { Device } from "../../common/types";

type FieldType = Omit<Device, "_id, address, battery, signal">;

export async function action(data: ActionFunctionArgs) {
  const device = await updateDevice(data);
  return device;
}

export default function EditDevice() {
  const device = useLoaderData() as Device;

  const submit = useSubmit();

  const initialValues = {
    ...device,
    latitude: device.latitude || "",
    longitude: device.latitude || "",
  };

  const deviceTypesOptions = Object.entries(deviceTypes).map(item => ({
    value: item[0],
    label: item[1],
  }));

  const handleSubmit = (values: FieldType) => {
    submit(values, { method: "patch" });
  };

  return (
    <Container>
      <Breadcrumb
        items={[
          {
            title: <Link to="/">Устройства</Link>,
          },
          {
            title: `Редактирование "${device.number}"`,
          },
        ]}
        className="mb-5"
      />
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
          <Select options={deviceTypesOptions} />
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
    </Container>
  );
}
