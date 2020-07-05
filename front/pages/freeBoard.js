import React from 'react';
import { Row, Col, PageHeader } from 'antd';
import AppLayout from '../components/Applayout';
import PostForm from '../components/postForm';
import PostList from '../components/postList';

const FreeBoard = () => {
  return (
    <>
      <AppLayout>
        <Row>
          <Col span={20}>
            <div style={{ marginLeft: '20px', marginTop: '10px', marginRight: '20px' }}>
              <PageHeader className="site-page-header" title="자유게시판" subTitle="하냥이들의 소통공간" />
              <PostForm />
              <PostList />
            </div>
          </Col>
          <Col span={4} style={{ backgroundColor: 'green' }}>
          </Col>
        </Row>
      </AppLayout>
    </>
  );
};

export default FreeBoard;
