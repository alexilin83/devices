import { Form, Input, Select } from "antd";

type CreateDeviceFormProps = {
  form: any;
}

type FieldType = {
  number: number;
  name: string;
  type: "sensor" | "hub";
  longitude: number;
  latitude: number;
};
const initialValues = {
  number: "",
  name: "",
  type: "",
  longitude: "",
  latitude: "",
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

export default function CreateDeviceForm(props: CreateDeviceFormProps) {
  const { form } = props;

  return (
    <Form form={form} initialValues={initialValues} layout="vertical">
      <Form.Item<FieldType> label="Номер" name="number">
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
    </Form>
  );
}
