import { useEffect, ReactNode } from "react";
import { useParams, useLoaderData, useNavigate, useSubmit, redirect, ActionFunctionArgs } from "react-router-dom";
import { Button, Col, Row, Popconfirm, Space } from "antd";
import { SettingOutlined, DeleteOutlined, CloseOutlined } from "@ant-design/icons";
import { Line, Liquid, Pie, Column } from "@ant-design/plots";
import L from "leaflet";
import { Device } from "../../../../common/types";
import { deviceTypes } from "../../../../common/constants";
import { getDevice, deleteDevice } from "../../../../common/actions";

type BoxProps = {
  children: ReactNode;
};

const lineData = [
  { year: "1991", value: 3 },
  { year: "1992", value: 4 },
  { year: "1993", value: 3.5 },
  { year: "1994", value: 5 },
  { year: "1995", value: 4.9 },
  { year: "1996", value: 6 },
  { year: "1997", value: 7 },
  { year: "1998", value: 9 },
  { year: "1999", value: 13 },
];

const data = [
  {
    type: "группа 1",
    value: 27,
  },
  {
    type: "группа 2",
    value: 25,
  },
  {
    type: "группа 3",
    value: 18,
  },
  {
    type: "группа 4",
    value: 15,
  },
  {
    type: "группа 5",
    value: 10,
  },
  {
    type: "группа 6",
    value: 5,
  },
];

export async function loader(data: ActionFunctionArgs) {
  const { params } = data;
  const id = params.id || "";
  const device = await getDevice(id);
  return device;
}

export async function action(data: ActionFunctionArgs) {
  await deleteDevice(data);
  return redirect(`/`);
}

function Box(props: BoxProps) {
  const { children } = props;

  return <div className="p-2 bg-white rounded-md shadow-sm">{children}</div>;
}

export default function DeviceInfo() {
  const { id } = useParams();
  const device = useLoaderData();

  const navigate = useNavigate();
  const submit = useSubmit();

  const { number, name, type, latitude, longitude } = device as Device;

  const lineConfig = {
    data: lineData,
    xField: "year",
    yField: "value",
  };

  const liquidConfig = {
    percent: 0.25,
  };

  const pieConfig = {
    data,
    angleField: "value",
    colorField: "type",
  };

  const columnConfig = {
    data,
    xField: "type",
    yField: "value",
  };

  const handleDelete = () => {
    submit(null, { method: "delete" });
  };

  useEffect(() => {
    const el = document.getElementById('map-content');
    if (el) {
      L.DomEvent.disableClickPropagation(el);
      L.DomEvent.disableScrollPropagation(el);
    }
  }, []);

  return (
    <div id="map-content" className="relative w-full h-2/3 cursor-default">
      <div className="overflow-auto h-full py-8 p-10 bg-slate-100/90 rounded-lg shadow-md">
        <div className="flex justify-between mb-2">
          <h2 className="m-0">
            {number} <span className="font-normal">({name})</span>
          </h2>
          <Space>
            <Button icon={<SettingOutlined />} onClick={() => navigate(`/devices/${id}/edit`)}>
              Настройки
            </Button>
            <Popconfirm
              title="Удалить устройство"
              description="Вы уверены что хотите удалить это устройство?"
              okText="Да"
              cancelText="Нет"
              onConfirm={handleDelete}
            >
              <Button icon={<DeleteOutlined />} danger>
                Удалить
              </Button>
            </Popconfirm>
          </Space>
        </div>
        <p>
          <b>Тип:</b> {deviceTypes[type]}
        </p>
        <p>
          <b>Координаты:</b> {latitude}, {longitude}
        </p>
        <Row gutter={[5, 5]}>
          <Col span={6}>
            <Box>
              <Liquid height={250} {...liquidConfig} />
            </Box>
          </Col>
          <Col span={18}>
            <Box>
              <Line height={250} {...lineConfig} />
            </Box>
          </Col>
          <Col span={6}>
            <Box>
              <Pie height={250} {...pieConfig} />
            </Box>
          </Col>
          <Col span={18}>
            <Box>
              <Column height={250} {...columnConfig} />
            </Box>
          </Col>
        </Row>
      </div>
      <Button
        shape="circle"
        icon={<CloseOutlined />}
        className="absolute right-0 bottom-[-40px]"
        onClick={() => navigate("/")}
      />
    </div>
  );
}
