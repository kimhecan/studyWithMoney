import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Comment, Popover, Button, Avatar } from 'antd';
import { EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { backUrl } from '../../config/config';
import { DELETE_COMMENT_REQUEST } from '../../reducers/post';

const Remark = ({ post, comment, isRecomment, ReCommentVisible }) => {
  const { me } = useSelector((state) => state.user);
  const [visibleComment, setVisibleComment] = useState(false);
  const dispatch = useDispatch();

  const onRemoveComment = (commentId) => {
    console.log(commentId, 'commentId');
    if (!me.id) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: DELETE_COMMENT_REQUEST,
      data: { commentId, postId: post.id },
    });
  };

  const CommentVisibleChange = (v) => {
    setVisibleComment(v);
  };

  const marginLeft = isRecomment ? '30px' : '7px';


  return (
    <>
      <Comment
        style={{ backgroundColor: 'white' }}
        author={comment.User.nickname}
        avatar={<Avatar src={`${backUrl}/profile/${comment.User.profileImg}`} style={{ marginLeft: `${marginLeft}` }} />}
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
              <div style={{ fontWeight: 'bold', fontSize: '12px', marginTop: '3px' }}>
                <p onClick={ReCommentVisible}>댓글 달기</p>
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
