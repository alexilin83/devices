import { useParams } from "react-router-dom";
import { Empty } from "antd";

export default function DeviceError() {
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center h-full">
      <Empty description={<p>Устройство <b>{id}</b> не найдено</p>} />
    </div>
  );
}
