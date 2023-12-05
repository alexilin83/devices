import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "../Navigation";

const { Header, Footer, Content } = Layout;

export default function LayoutWrapper() {
  return (
    <Layout className="h-screen bg-slate-100">
      <Header className="relative flex items-center px-10 bg-white shadow-md z-10">
        <h1 className="m-0">IoT</h1>
        <Navigation />
      </Header>
      <Content className="relative py-5 z-0">
        <Outlet />
      </Content>
      <Footer className="flex items-center h-[60px] px-10 bg-white">
        <span>© 2023</span>
      </Footer>
    </Layout>
  );
}
