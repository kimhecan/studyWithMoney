import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Popover, Button } from 'antd';
import { LikeOutlined, CommentOutlined, EllipsisOutlined, NotificationOutlined, EditOutlined, DeleteOutlined, LikeTwoTone, SmileTwoTone } from '@ant-design/icons';
import PropTypes from 'prop-types';
import PostImages from '../PostImages';
import UpdateZoom from '../UpdateZoom';
import CommentForm from '../CommentForm';
import PostComment from '../PostComment';
import Report from '../Report';
import { DELETE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST } from '../../reducers/post';
import { StyledCard, CardHeaderWrapper, CardHeader, DateWrapper, StyledSpan } from './style';
import { backUrl } from '../../config/config';
import date from '../../util/date';

const PostCard = ({ post }) => {
  const { me } = useSelector((state) => state.user);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [visible, setVisible] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [showReport, setShowReport] = useState(false);
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
    if (confirm('게시물을 삭제하시겠습니까?') === false) return;
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

  const onReport = useCallback(() => {
    setShowReport(!showReport);
  }, [showReport]);

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
                  src={`${backUrl}/profile/${post.User.profileImg}`}
                  size="large"
                />
              </CardHeader>
              <DateWrapper>
                <strong style={{ fontSize: '16px' }}>{post.User.nickname}</strong>
                <p style={{ color: 'gray' }}>{date(post.createdAt)}</p>
              </DateWrapper>
            </CardHeaderWrapper>
            <p style={{ margin: '7px 15px', fontSize: '15px', color: 'black' }}>{post.content}</p>
            {post.Images.length > 0 && <PostImages alt="image" images={post.Images} />}
            {showUpdateForm && <UpdateZoom post={post} onClose={onCloseUpdateForm} />}
            {(post.Likers.length > 0 || post.Comments.length || true) > 0 && (
              <div style={{ minHeight: '30px' }}>
                {post.Likers.length > 0 && <SmileTwoTone style={{ marginLeft: '10px', display: 'inline-block' }} />}
                {post.Likers.length > 0 && <p style={{ marginLeft: '10px', marginBottom: '10px', display: 'inline-block' }}>{post.Likers.length}명</p>}
                {post.Comments.length > 0 && <StyledSpan onClick={onToggleComment}>댓글 {post.Comments.length}개</StyledSpan>}
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
              <div onClick={onReport}>
                <NotificationOutlined key="report" />
                <strong style={{ marginLeft: '5px' }}>신고하기</strong>
              </div>

            ),
        ]}
      />
      {showReport && <Report post={post} onReport={onReport} />}
      {commentFormOpened && (
        <div>
          <CommentForm post={post} parentComment={null} isRecomment={false} />
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
