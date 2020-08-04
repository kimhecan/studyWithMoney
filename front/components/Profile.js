import React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col, Divider, List } from 'antd';

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  const infoData = [['아이디', me.userId], ['이메일', me.email], ['닉네임', me.nickname], ['학과', me.department]];
  const PostData = [['게시글 수', me.Posts.length]];

  return (
    <>
      <div className="site-card-wrapper">
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
    </>
  );
};

export default Profile;
