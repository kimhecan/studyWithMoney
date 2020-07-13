import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar, Popover, Button, Comment, List } from 'antd';
import { LikeOutlined, CommentOutlined, EllipsisOutlined, NotificationOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import parseDate from '../functions/parseDate';
import PostImages from './PostImages';
import PostUpdate from './updateZoom/PostUpdate';
import CommentForm from './CommentForm';
import { DELETE_POST_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
  const { info } = useSelector((state) => state.user);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [visible, setVisible] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
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

  const onToggleComment = useCallback(() => {
    console.log(123);
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <>
      <Card
        style={{ marginTop: '100px', borderTopLeftRadius: '15px', borderTopRightRadius: '15px', boxShadow: '0px 0px 1px 0.05px gray' }}
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
            {post.Comments.length > 0 && <p onClick={onToggleComment} style={{ float: 'right', marginRight: '10px', color: 'gray' }}>댓글 {post.Comments.length}개</p>}
          </div>
        )}
        actions={[
          <div>
            <LikeOutlined key="like" />
            <strong style={{ marginLeft: '5px' }}>좋아요</strong>
          </div>,
          <div onClick={onToggleComment}>
            <CommentOutlined key="comment" />
            <strong style={{ marginLeft: '5px' }}>댓글 달기</strong>
          </div>,
          info.id === post.UserId
            ? (
              <Popover
                key="more"
                content={(
                  <Button.Group>
                    <Button onClick={onUpdatePost}><EditOutlined />수정</Button>
                    <Button onClick={onRemovePost}><DeleteOutlined />삭제</Button>
                  </Button.Group>
                )}
                trigger="click"
                visible={visible}
                onVisibleChange={handleVisibleChange}
              >
                <EllipsisOutlined key="etc" />
              </Popover>
            )
            : (
              <div>
                <NotificationOutlined key="report" />
                <strong style={{ marginLeft: '5px' }}>신고하기</strong>
              </div>

            ),
        ]}
      />
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          {post.Comments.length > 0
            && (
              <List
                itemLayout="horizontal"
                dataSource={post.Comments}
                style={{ boxShadow: '0px 0px 1px 0.05px gray', borderRadius: '10px' }}
                renderItem={(item) => (
                  <Comment
                    style={{ backgroundColor: 'white' }}
                    author={item.User.nickname}
                    avatar={<Avatar src={`http://localhost:3065/profile/${item.User.profileImg}`} style={{ marginLeft: '7px' }} />}
                    content={
                      <span style={{ backgroundColor: '#F2F3F5', padding: '7px', borderRadius: '10px' }}>{item.content}</span>
                    }
                  />
                )}
              />
            )}
        </div>
      )}
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
