import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Comment, Popover, Button, Avatar } from 'antd';
import { EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { DELETE_COMMENT_REQUEST } from '../reducers/post';

const PostComment = ({ post, comment }) => {
  const { me } = useSelector((state) => state.user);
  const [visibleComment, setVisibleComment] = useState(false);
  const dispatch = useDispatch();

  const onRemoveComment = (commentId) => {
    console.log(commentId, 'commentId');
    if (!me.id) {
      return alert('로그인이 필요합니다.');
    }
    console.log(post.id, '서버로 보낼때 post.id');
    return dispatch({
      type: DELETE_COMMENT_REQUEST,
      data: { commentId, postId: post.id },
    });
  };

  const CommenthandleVisibleChange = (v) => {
    setVisibleComment(v);
  };

  return (
    <>
      <div>
        <Comment
          style={{ backgroundColor: 'white' }}
          author={comment.User.nickname}
          avatar={<Avatar src={`http://localhost:3065/profile/${comment.User.profileImg}`} style={{ marginLeft: '7px' }} />}
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
                      onVisibleChange={CommenthandleVisibleChange}
                    >
                      <EllipsisOutlined key="etc" />
                    </Popover>
                  )}
              </div>
            </>
          )}
        />
      </div>
    </>
  );
};

PostComment.propTypes = {
  comment: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

export default PostComment;
