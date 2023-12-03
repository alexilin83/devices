import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import L from "leaflet";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";

export default function MapContent() {
  const navigate = useNavigate();

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
        <Outlet />
      </div>
      <Button
        shape="circle"
        icon={<CloseOutlined />}
        className="absolute right-0 bottom-[-40px]"
        onClick={() => navigate('/')}
      />
    </div>
  );
}
