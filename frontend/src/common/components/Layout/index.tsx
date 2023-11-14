import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navigation from "../Navigation";

const { Header, Footer, Content } = Layout;

const layoutStyle: React.CSSProperties = {
  height: '100%',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  height: 80,
  padding: '0 40px',
  background: '#fff',
  lineHeight: '80px'
};

const logoStyle: React.CSSProperties = {
  fontWeight: 'bold',
  fontSize: '1.5rem',
};

const contentStyle: React.CSSProperties = {
  position: 'relative',
};

const footerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  height: 60,
  padding: '0 40px',
  background: '#fff',
};

export default function LayoutWrapper() {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <div style={logoStyle}>IoT</div>
        <Navigation />
      </Header>
      <Content style={contentStyle}>
        <Outlet />
      </Content>
      <Footer style={footerStyle}>
        <span>© 2023</span>
      </Footer>
    </Layout>
  );
}
