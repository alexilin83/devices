import { NavLink } from "react-router-dom";
import { Menu } from "antd";

export default function Navigation() {
  const routes = [
    ["Главная", "/"],
    ["Настройки", "/settings"],
  ];

  return (
    <Menu
      mode="horizontal"
      items={routes.map((route, index) => {
        const key = index + 1;
        return {
          key,
          label: (
            <NavLink
              to={route[1]}
              className={({ isActive, isPending }) => `block py-4 rounded-md ${(isActive ? "px-5 bg-rose-500 !text-white" : isPending ? "pending" : "")}`}
            >
              {route[0]}
            </NavLink>
          ),
        };
      })}
      className="main-nav ml-5 border-none"
    />
  );
}
