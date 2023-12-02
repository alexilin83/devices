import { NavLink, useLocation } from "react-router-dom";
import { Menu } from "antd";

export default function Navigation() {
  const routes = [
    ["Устройства", "/"],
    ["Настройки", "/settings"],
  ];

  const location = useLocation();

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={routes.map((route) => {
        const key = route[1];
        return {
          key,
          label: <NavLink to={route[1]}>{route[0]}</NavLink>,
        };
      })}
      className="ml-5 font-bold"
    />
  );
}
