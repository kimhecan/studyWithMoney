import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card, Avatar, Popover, Button } from 'antd';
import { LikeOutlined, CommentOutlined, EllipsisOutlined, NotificationOutlined, EditOutlined, DeleteOutlined, LikeTwoTone, SmileTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import moment from 'moment';
import PostImages from '../PostImages';
import PostUpdate from '../updateZoom/PostUpdate';
import CommentForm from '../CommentForm';
import PostComment from '../PostComment';
import { DELETE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../../reducers/post';
import { StyledCard, CardHeaderWrapper, CardHeader, DateWrapper } from './style';

moment.locale('ko');

const PostCard = ({ post }) => {
  const { me } = useSelector((state) => state.user);
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
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onLike = useCallback(() => {
    if (!me.id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [me.id]);
  const onUnlike = useCallback(() => {
    if (!me.id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [me.id]);

  const liked = post.Likers.find((v) => v.id === me.id);

  return (
    <>
      <StyledCard
        hoverable
        bodyStyle={{ padding: '0px' }}
        cover={(
          <div>
            <CardHeaderWrapper>
              <CardHeader>
                <Avatar
                  src={`http://localhost:3065/profile/${post.User.profileImg}`}
                  size="large"
                />
              </CardHeader>
              <DateWrapper>
                <strong style={{ fontSize: '16px' }}>{post.User.nickname}</strong>
                <p style={{ color: 'gray' }}>{moment(post.createdAt).format('YYYY.MM.DD')}</p>
              </DateWrapper>
            </CardHeaderWrapper>
            <p style={{ margin: '7px 15px', fontSize: '18px' }}>{post.content}</p>
            {post.Images.length > 0 && <PostImages alt="image" images={post.Images} />}
            {showUpdateForm && <PostUpdate post={post} onClose={onCloseUpdateForm} />}
            {(post.Likers.length > 0 || post.Comments.length) > 0 && (
              <div>
                {post.Likers.length > 0 && <SmileTwoTone style={{ marginLeft: '10px', display: 'inline-block' }} />}
                {post.Likers.length > 0 && <p style={{ marginLeft: '10px', marginBottom: '10px', display: 'inline-block' }}>{post.Likers.length}명</p>}
                {post.Comments.length > 0 && <span onClick={onToggleComment} style={{ float: 'right', marginRight: '10px', color: 'gray' }}>댓글 {post.Comments.length}개</span>}
              </div>
            )}
          </div>
        )}
        actions={[
          <div>
            {liked
              ? <div onClick={onUnlike}><LikeTwoTone key="like" onClick={onUnlike} /><strong style={{ marginLeft: '5px' }}>좋아요</strong></div>
              : <div onClick={onLike}><LikeOutlined key="unlike" onClick={onLike} /><strong style={{ marginLeft: '5px' }}>좋아요</strong></div>}
          </div>,
          <div onClick={onToggleComment}>
            <CommentOutlined key="comment" />
            <strong style={{ marginLeft: '5px' }}>댓글 달기</strong>
          </div>,
          me.id === post.UserId
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
          {post.Comments.length > 0 && post.Comments.map((v) => <PostComment key={v.id} post={post} comment={v} />)}
        </div>
      )}
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;
