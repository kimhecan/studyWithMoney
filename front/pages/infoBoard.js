import React from 'react';
import { Row, Col, PageHeader } from 'antd';
import AppLayout from '../components/Applayout';
import PostForm from '../components/postForm';
import PostList from '../components/postList';

const InfoBoard = () => {
  return (
    <>
      <AppLayout>
        <Row>
          <Col span={20}>
            <div style={{ marginLeft: '20px', marginTop: '10px', marginRight: '20px' }}>
              <PageHeader className="site-page-header" title="정보게시판" subTitle="유익한 정보를 올려주세요" />
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

export default InfoBoard;
