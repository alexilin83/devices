import { Form, Input, Modal, Select } from "antd";
import { useLoaderData, useNavigate, useSubmit, ActionFunctionArgs, redirect } from "react-router-dom";
import { updateDevice } from "../../../../common/actions";

type FieldType = {
  number: number;
  name: string;
  type: "sensor" | "hub";
  longitude: number;
  latitude: number;
};

export async function action(data: ActionFunctionArgs) {
  await updateDevice(data);
  return redirect(`/`);
}

export default function EditDeviceForm() {
  const device = useLoaderData();

  const navigate = useNavigate();

  const [form] = Form.useForm();
  const submit = useSubmit();

  if (!device) return false;

  const initialValues = { ...device };

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

  return (
    <Modal
      open
      title="Редактировать устройство"
      cancelText="Отменить"
      okText="Сохранить"
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            submit(values, { method: "patch" });
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      onCancel={() => navigate('/')}
    >
      <Form form={form} initialValues={initialValues} layout="vertical">
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
      </Form>
    </Modal>
  );
}
