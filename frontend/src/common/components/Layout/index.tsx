import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "../Navigation";

const { Header, Footer, Content } = Layout;

export default function LayoutWrapper() {
  return (
    <Layout className="h-screen bg-slate-100">
      <Header className="relative flex items-center h-[80px] px-10 bg-white shadow-md z-10 leading-none">
        <h1>IoT</h1>
        <Navigation />
      </Header>
      <Content className="relative">
        <Outlet />
      </Content>
      <Footer className="flex items-center h-[60px] px-10 bg-white text-slate-500">
        <span>© 2023</span>
      </Footer>
    </Layout>
  );
}
