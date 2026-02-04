import React, { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import MenuList from "@/pages/menu/index";
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

const LayoutMain: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        width={200} 
        collapsible 
        collapsed={collapsed}
        onCollapse={setCollapsed}
      >
        <div style={{ 
          color: 'white', 
          textAlign: 'center', 
          padding: '16px',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
          系统菜单
        </div>
        <MenuList />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button type="primary" onClick={() => {
                localStorage.removeItem('token');
                navigate('/login');
              }}>
              退出登录
            </Button>
        </Header>
        <Content style={{ 
          margin: '24px 16px', 
          padding: 24, 
          minHeight: 280,
          background: colorBgContainer,
          borderRadius: borderRadiusLG
        }}>
          <Outlet /> {/* 这里会渲染当前路由对应的页面 */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutMain;