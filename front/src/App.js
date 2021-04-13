import './App.css';
import GlobalLayout from './components/Layout/GlobalLayout'
import React, { useState } from 'react';
import { test } from './utils/apis/BackGenApi';
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;


function App() {

  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = async() => {
    let req = await test();
    console.log('req : ', req);
    setCollapsed(!collapsed);
  };

  return (
    <>
      <GlobalLayout>
        <>
        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: handleToggle,
              })}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
        </>
      </GlobalLayout>
    </>
  )
}

export default App

// function App() {

//   const [collapsed, setCollapsed] = useState(false);

//   const handleToggle = async() => {
//     let req = await test();
//     console.log('req : ', req);
//     setCollapsed(!collapsed);
//   };

//   return (
//     <>
    // <Layout>
    //     <Sider trigger={null} collapsible collapsed={collapsed}>
    //       <div className="logo" />
    //       <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
    //         <Menu.Item key="1" icon={<UserOutlined />}>
    //           nav 1
    //         </Menu.Item>
    //         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
    //           nav 2
    //         </Menu.Item>
    //         <Menu.Item key="3" icon={<UploadOutlined />}>
    //           nav 3
    //         </Menu.Item>
    //       </Menu>
    //     </Sider>
    //     <Layout className="site-layout">
    //       <Header className="site-layout-background" style={{ padding: 0 }}>
    //         {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
    //           className: 'trigger',
    //           onClick: handleToggle,
    //         })}
    //       </Header>
    //       <Content
    //         className="site-layout-background"
    //         style={{
    //           margin: '24px 16px',
    //           padding: 24,
    //           minHeight: 280,
    //         }}
    //       >
    //         Content
    //       </Content>
    //     </Layout>
    //   </Layout>
//     </>
//   );
// }

// export default App;