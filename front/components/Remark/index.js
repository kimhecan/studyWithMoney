import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Comment, Popover, Button, Avatar } from 'antd';
import { EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { backUrl } from '../../config/config';
import { DELETE_COMMENT_REQUEST, DELETE_RECOMMENT_REQUEST } from '../../reducers/post';
import { StyledComment, StyledAvatar, StyledSpan } from './style';

const Remark = ({ post, comment, isRecomment, ReCommentVisible }) => {
  const { me } = useSelector((state) => state.user);
  const [visibleComment, setVisibleComment] = useState(false);
  const dispatch = useDispatch();

  const onRemoveComment = (commentId) => {
    console.log(commentId, 'commentId');
    if (!me.id) {
      return alert('로그인이 필요합니다.');
    }
    if (isRecomment) {
      return dispatch({
        type: DELETE_RECOMMENT_REQUEST,
        data: { reCommentId: commentId, postId: post.id }
      })
    } else {
      return dispatch({
        type: DELETE_COMMENT_REQUEST,
        data: { commentId, postId: post.id },
      });
    }
  };

  const CommentVisibleChange = (v) => {
    setVisibleComment(v);
  };

  const marginLeft = isRecomment ? '45px' : '1px';
  const widthHeight = isRecomment ? 'small' : 'default';

  return (
    <>
      <StyledComment
        author={comment.User.nickname}
        avatar={
          (<div style={{ marginLeft: `${marginLeft}` }}>
            <StyledAvatar src={`${backUrl}/profile/${comment.User.profileImg}`} size={`${widthHeight}`} />
          </div>)
        }
        content={(
          <>
            <span style={{ backgroundColor: '#F2F3F5', padding: '7px', borderRadius: '10px' }}>{comment.content}</span>
            <div style={{ display: 'inline-block' }}>
              {comment.User.id === me.id
                && (
                  <Popover
                    content={<Button onClick={() => onRemoveComment(comment.id)}><DeleteOutlined />삭제</Button>}
                    trigger="click"
                    visible={visibleComment}
                    onVisibleChange={CommentVisibleChange}
                  >
                    <EllipsisOutlined key="etc" />
                  </Popover>
                )}
            </div>
            {!isRecomment && (
              <div>
                <StyledSpan onClick={ReCommentVisible}>댓글 달기{comment.ReComments.length ? `(${comment.ReComments.length})` : ''}</StyledSpan>
              </div>
            )}
          </>
        )}
      />
    </>
  );
};

Remark.propTypes = {
  post: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  isRecomment: PropTypes.bool.isRequired,
  ReCommentVisible: PropTypes.func.isRequired,
};

export default Remark;
