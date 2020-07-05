import React from 'react';
import { Row, Col, PageHeader } from 'antd';
import AppLayout from '../components/Applayout';
import PostForm from '../components/postForm';
import PostList from '../components/postList';

const ClubBoard = () => {
  return (
    <>
      <AppLayout>
        <Row>
          <Col span={20}>
            <div style={{ marginLeft: '20px', marginTop: '10px', marginRight: '20px' }}>
              <PageHeader className="site-page-header" title="동아리·학회" subTitle="동아리·학회 홍보해주세요" />
              <PostForm />
              <PostList />
            </div>
          </Col>
          <Col span={4} style={{ backgroundColor: 'green' }} />
        </Row>
      </AppLayout>
    </>
  );
};

export default ClubBoard;
