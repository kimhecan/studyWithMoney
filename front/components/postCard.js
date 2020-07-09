import React from 'react';
import { Card, Avatar } from 'antd';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import parseDate from '../functions/parseDate';
import PostImages from './postImages';

const PostCard = ({ post }) => {
  console.log(post.id, 'post.id');

  return (
    <>
      <Card
        style={{ marginTop: '100px', borderRadius: '15px' }}
        hoverable
        cover={(
          <div>
            <Avatar src={`http://localhost:3065/profile/${post.User.profileImg}`} style={{ float: 'left' }} />
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px' }}>
              <strong style={{ flex: 1, marginLeft: '10px' }}>{post.User.nickname}</strong>
              <p style={{ flex: 1, marginLeft: '10px' }}>{parseDate(post.createdAt)}</p>
            </div>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
            {post.Images.length > 0 && <PostImages alt="image" images={post.Images} />}
          </div>
        )}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      />
    </>
  );
};

PostCard.propTypes = {
  post: propTypes.array.isRequired,
};

export default PostCard;
