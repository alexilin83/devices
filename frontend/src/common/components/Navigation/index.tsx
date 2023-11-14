import { Menu } from 'antd';

export default function Navigation() {
  const routes = [
    ['Главная', '/'],
    ['Настройки', '/settings'],
  ]

  return (
    <Menu
      mode="horizontal"
      items={routes.map((route, index) => {
        const key = index + 1;
        return {
          key,
          label: route[0],
        };
      })}
    />
  );
}
