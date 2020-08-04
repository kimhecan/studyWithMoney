import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Menu, Col, Row } from 'antd';
import { AppstoreOutlined, HomeOutlined, UserOutlined, ContainerOutlined, BulbOutlined, LogoutOutlined } from '@ant-design/icons';
import { LOAD_USER_REQUEST, LOG_OUT_REQUEST } from '../../reducers/user';
import Main from '../main';
import Profile from '../profile';
import Problem from '../problem';
import Concept from '../concept';
import Board from '../Board';
import { ImageWrapper, HeaderText, Img, Sponsored } from './style';

const { SubMenu } = Menu;

const AppLayout = () => {
  const { me } = useSelector((state) => state.user);
  const [current, setCurrent] = useState('main');
  const dispatch = useDispatch();
  const router = useRouter();

  // SSR처리해야함
  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
  }, [current]);

  const handleClick = (e) => {
    setCurrent(e.key);
    if (e.key === 'logout') {
      router.replace('/');
      dispatch({
        type: LOG_OUT_REQUEST,
      });
    }
  };

  return (
    <>
      {me && me.id !== null
        ? (
          <Row>
            <Col span={4}>
              <Menu
                onClick={handleClick}
                defaultSelectedKeys={['main']}
                defaultOpenKeys={[{ current }]}
                mode="inline"
                forceSubMenuRender="true"
                style={{ borderRadius: '15px' }}

              >
                <ImageWrapper>
                  <Img src="http://localhost:3065//profile/logo.png" alt="img" />
                </ImageWrapper>
                <Menu.Item key="main" icon={<HomeOutlined />}>
                  Home
                </Menu.Item>
                <Menu.Item key="profile" icon={<UserOutlined />}>
                  {me && me.nickname}님
                </Menu.Item>
                <SubMenu key="sub1" icon={<BulbOutlined />} title="공부하냥">
                  <Menu.Item key="problem">문제풀이</Menu.Item>
                  <Menu.Item key="concept">개념이해</Menu.Item>
                </SubMenu>
                <SubMenu key="board" icon={<AppstoreOutlined />} title="게시판">
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
              <Row>
                <HeaderText>하냥대학교</HeaderText>
              </Row>
              <Row>
                <Col span={20}>
                  {current === 'main' && <Main />}
                  {current === 'profile' && <Profile />}
                  {current === 'problem' && <Problem />}
                  {current === 'concept' && <Concept />}
                  {current === 'freeBoard' && <Board category={current} />}
                  {current === 'infoBoard' && <Board category={current} />}
                  {current === 'clubBoard' && <Board category={current} />}
                </Col>
                <Col span={4}>
                  <Sponsored style={{ color: '#65676b' }}>Sponsored</Sponsored>
                </Col>
              </Row>
            </Col>
          </Row>
        )
        : <p>권한이 없습니다.</p>}
    </>
  );
};

export default AppLayout;
