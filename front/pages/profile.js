import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Divider, List, Card } from 'antd';
import AppLayout from '../components/Applayout';

const Profile = () => {
  const { info } = useSelector((state) => state.user);

  const infoData = [['아이디', info.userId], ['이메일', info.email], ['닉네임', info.nickname], ['학과', info.department]];
  const PostData = [['질문 수', 10], ['답변 수', 20], ['해결 수:', 30]];
  return (
    <AppLayout>
      <div className="site-card-wrapper">
        <Row style={{ backgroundColor: '#001529', height: '120px' }}>
          배너
        </Row>
        <Row gutter={10} style={{ marginTop: '20px', marginLeft: '20px' }}>
          <Col span={12}>
            <Divider orientation="left">기본 정보</Divider>
            <List
              bordered
              dataSource={infoData}
              renderItem={(item) => (
                <List.Item>
                  <strong>{item[0]}</strong>
                  <p>{item[1]}</p>
                </List.Item>
              )}
            />
          </Col>
          <Col span={12}>
            <Divider orientation="left">활동 정보</Divider>
            <List
              bordered
              dataSource={PostData}
              renderItem={(item) => (
                <List.Item>
                  <strong>{item[0]}</strong>
                  <p>{item[1]}</p>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    </AppLayout>
  );
};

export default Profile;
