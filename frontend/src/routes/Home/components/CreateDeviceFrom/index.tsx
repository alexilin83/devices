import { Form, Input, Select } from "antd";

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
    label: "Сенсор"
  },
  {
    value: "hub",
    label: "Хаб"
  }
]

export default function CreateDeviceForm() {
  // const [state, formAction] = useFormState(createDevice, initialState);

  return (
    <Form initialValues={initialValues}>
      <Form.Item<FieldType> label="Номер" name="number">
        <Input />
      </Form.Item>
      <Form.Item<FieldType> label="Название" name="number">
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
