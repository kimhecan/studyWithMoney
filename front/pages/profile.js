import React from 'react';
import { Row, Col, Card } from 'antd';
import AppLayout from '../components/Applayout';

const Profile = () => {

  return (
    <AppLayout>
      <div className="site-card-wrapper">
        <Row style={{ backgroundColor: '#001529', height: '120px' }}>
          배너
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </AppLayout>
  );
};

export default Profile;
