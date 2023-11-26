import { ReactNode } from "react";
import { useLoaderData, ActionFunctionArgs } from "react-router-dom";
import { Button, Col, Row } from "antd";
import { Line, Liquid, Pie, Column } from "@ant-design/plots";
import { SettingOutlined } from "@ant-design/icons";
import { getDevice } from "../../../../common/actions";
import { Device } from "../../../../common/types";
import { deviceTypes } from "../../../../common/constants";

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
  const id = params.deviceId || "";
  const device = await getDevice(id);
  return device;
}

function Box(props: BoxProps) {
  const { children } = props;

  return <div className="p-2 bg-white rounded-md shadow-sm">{children}</div>;
}

export default function DeviceDashboard() {
  const device = useLoaderData();

  if (!device) return false;

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
    xField: 'type',
    yField: 'value',
  };

  return (
    <>
      <div className="flex justify-between">
        <h2>
          {number} <span className="text-slate-500">({name})</span>
        </h2>
        <Button icon={<SettingOutlined />}>Настройки</Button>
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
    </>
  );
}
