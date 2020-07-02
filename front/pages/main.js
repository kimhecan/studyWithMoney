import React from 'react';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  HomeOutlined,
  UserOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';

const { SubMenu } = Menu;

const Main = () => {
  const { id } = useSelector((state) => state.user);

  return (
    <>
      <div style={{ width: '230px' }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          <div style={{ height: '130px', textAlign: 'center' }}>
            <img
              src="https://user-images.githubusercontent.com/39295881/86248913-7f8de080-bbe9-11ea-801a-73f4f426ed0d.png"
              alt="img"
              style={{ width: '150px', marginTop: '10px' }}
            />
          </div>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            {id}님
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </div>
    </>
  );
};
export default Main;
