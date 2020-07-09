import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Menu, Col, Row } from 'antd';
import { AppstoreOutlined, HomeOutlined, UserOutlined, ContainerOutlined, BulbOutlined, LogoutOutlined } from '@ant-design/icons';
import { LOAD_USER_REQUEST, LOG_OUT_REQUEST } from '../reducers/user';
import { POST_RESET } from '../reducers/post';
import Board from './board';
import Main from './main';

const { SubMenu } = Menu;

const AppLayout = () => {
  const { info } = useSelector((state) => state.user);
  const [current, setCurrent] = useState('home');
  const dispatch = useDispatch();
  const router = useRouter();

  // SSR처리해야함
  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
  }, []);

  const handleClick = (e) => {
    console.log(e.key);
    setCurrent(e.key);
    if (e.key.slice(4, e.key.length) === 'Board') {
      dispatch({
        type: POST_RESET,
      });
    }
    if (e.key === 'logout') {
      router.replace('/');
      dispatch({
        type: LOG_OUT_REQUEST,
      });
    }
  };

  return (
    <>
      {info && info.id !== null
        ? (
          <Row>
            <Col span={4} style={{ backgroundColor: '#001529' }}>
              <Menu
                onClick={handleClick}
                defaultSelectedKeys={['home']}
                defaultOpenKeys={[{ current }]}
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
                  <Menu.Item key="freeBoard">자유게시판</Menu.Item>
                  <Menu.Item key="infoBoard">정보게시판</Menu.Item>
                  <Menu.Item key="clubBoard">동아리·학회</Menu.Item>
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
              <Row style={{ backgroundColor: '#001529', height: '80px' }}>
                <p style={{ margin: 'auto auto', color: 'white' }}>한양대학교</p>
              </Row>
              <Row style={{ backgroundColor: '#F2F3F5' }}>
                {current === 'home' && <Main />}
                {current === 'freeBoard' && <Board category={current} />}
                {current === 'infoBoard' && <Board category={current} />}
                {current === 'clubBoard' && <Board category={current} />}
              </Row>
            </Col>
          </Row>
        )
        : <p>권한이 없습니다.</p>}
    </>
  );
};

export default AppLayout;
