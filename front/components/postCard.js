import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Avatar } from 'antd';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import propTypes from 'prop-types';
import parseDate from '../functions/parseDate';
import PostImages from './postImages';

const PostCard = ({ post }) => {
  console.log(post, 'post');

  const { info } = useSelector((state) => state.user);


  return (
    <>
      <Card
        style={{ marginTop: '100px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
        hoverable
        cover={(
          <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ margin: '15px', flex: '1' }}>
                <Avatar
                  src={`http://localhost:3065/profile/${post.User.profileImg}`}
                  size="large"
                  style={{ width: '50px', height: '50px' }}
                />
              </div>
              <div style={{ flex: '15', marginTop: '12px' }}>
                <strong style={{ fontSize: '16px' }}>{post.User.nickname}</strong>
                <p style={{ color: 'gray' }}>{parseDate(post.createdAt)}</p>
              </div>
            </div>
            <p style={{ margin: '7px 15px', fontSize: '18px' }}>{post.content}</p>
            {post.Images.length > 0 && <PostImages alt="image" images={post.Images} />}
          </div>
        )}
        actions={info.id === post.UserId
          ?
          [<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />]
          :
          [<SettingOutlined key="setting" />, <EditOutlined key="edit" />]
        }
      />
    </>
  );
};

PostCard.propTypes = {
  post: propTypes.object.isRequired,
};

export default PostCard;
