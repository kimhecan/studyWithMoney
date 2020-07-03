import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Menu, Col, Row } from 'antd';
import {
  AppstoreOutlined,
  HomeOutlined,
  UserOutlined,
  ContainerOutlined,
  BulbOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { LOG_OUT_REQUEST } from '../reducers/user';

const { SubMenu } = Menu;

const AppLayout = ({ children }) => {
  const { info } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = (e) => {
    console.log(e.key);
    switch (e.key) {
      case 'home':
        router.push('/main');
        break;
      case 'user':
        router.push('/profile');
        break;
      case 'problem':
        router.push('/problem');
        break;
      case 'concept':
        router.push('/concept');
        break;
      case 'freedom':
        router.push('/freedom');
        break;
      case 'information':
        router.push('/infomation');
        break;
      case 'club':
        break;
      case 'inquiry':
        break;
      case 'logout':
        router.replace('/');
        dispatch({
          type: LOG_OUT_REQUEST,
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      {info.id !== null
        ? (
          <Row>
            <Col span={4} style={{ height: '900px', backgroundColor: '#001529' }}>
              <Menu
                onClick={handleClick}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['']}
                mode="inline"
                theme="dark"
                forceSubMenuRender="true"
              >
                <div style={{ height: '130px', textAlign: 'center' }}>
                  <img
                    src="https://user-images.githubusercontent.com/39295881/86248913-7f8de080-bbe9-11ea-801a-73f4f426ed0d.png"
                    alt="img"
                    style={{ width: '150px', marginTop: '10px' }}
                  />
                </div>
                <Menu.Item key="home" icon={<HomeOutlined />}>
                  Home
                </Menu.Item>
                <Menu.Item key="user" icon={<UserOutlined />}>
                  {info && info.nickname}님
                </Menu.Item>
                <SubMenu key="sub1" icon={<BulbOutlined />} title="공부하냥">
                  <Menu.Item key="problem">문제풀이</Menu.Item>
                  <Menu.Item key="concept">개념이해</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="게시판">
                  <Menu.Item key="freedom">자유게시판</Menu.Item>
                  <Menu.Item key="information">정보게시판</Menu.Item>
                  <Menu.Item key="club">동아리·학회</Menu.Item>
                </SubMenu>
                <Menu.Item key="inquiry" icon={<ContainerOutlined />}>
                  문의하기
                </Menu.Item>
                <Menu.Item key="logout" icon={<LogoutOutlined />}>
                  로그아웃
                </Menu.Item>
              </Menu>
            </Col>
            <Col span={20}>
              {children}
            </Col>
          </Row>
        )
        : <p>권한이 없습니다.</p>}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
