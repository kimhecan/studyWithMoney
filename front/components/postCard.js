import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar, Popover, Button } from 'antd';
import { LikeOutlined, CommentOutlined, EllipsisOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import parseDate from '../functions/parseDate';
import PostImages from './postImages';
import PostUpdate from './updateZoom/postUpdate';
import { DELETE_POST_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
  const { info } = useSelector((state) => state.user);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const handleVisibleChange = (v) => {
    setVisible(v);
  };

  const onUpdatePost = useCallback(() => {
    if (!post) {
      return alert('로그인이 필요합니다.');
    }
    return setShowUpdateForm(true);
  }, [showUpdateForm]);

  const onCloseUpdateForm = useCallback(() => {
    setShowUpdateForm(false);
  }, [showUpdateForm]);

  const onRemovePost = useCallback(() => {
    if (!post) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: DELETE_POST_REQUEST,
      data: post.id,
    });
  }, [post.id]);

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
            {showUpdateForm && <PostUpdate post={post} onClose={onCloseUpdateForm} />}
          </div>
        )}
        actions={info.id === post.UserId
          ? [
            <LikeOutlined key="like" />,
            <CommentOutlined key="comment" />,
            <Popover
              key="more"
              content={(
                <Button.Group>
                  <Button onClick={onUpdatePost}>수정</Button>
                  <Button onClick={onRemovePost}>삭제</Button>
                </Button.Group>
              )}
              trigger="click"
              visible={visible}
              onVisibleChange={handleVisibleChange}
            >
              <EllipsisOutlined key="etc" />
            </Popover>]
          : [<LikeOutlined key="like" />, <CommentOutlined key="comment" />]}
      />
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
