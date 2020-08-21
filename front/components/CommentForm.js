import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Avatar } from 'antd';
import useInput from '../hooks/useInput';
import { ADD_COMMENT_REQUEST, ADD_RECOMMENT_REQUEST } from '../reducers/post';
import { backUrl } from '../config/config';

const CommentForm = ({ post, parentComment, isRecomment }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  const onSubmitComment = useCallback(() => {
    setCommentText('');
    if (isRecomment) {
      dispatch({
        type: ADD_RECOMMENT_REQUEST,
        data: { content: commentText, commentId: parentComment.id, postId: post.id },
      });
    } else {
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: { content: commentText, postId: post.id },
      });
    }
  }, [commentText, me.id]);

  const marginLeft = isRecomment ? '40px' : '0px';
  const widthHeight = isRecomment ? '25px' : '30px';
  return (
    <>
      <Form onFinish={onSubmitComment} style={{ backgroundColor: 'white', maxWidth: '700px', margin: 'auto auto' }}>
        <div style={{ backgroundColor: 'white', marginLeft: `${marginLeft}` }}>
          <Avatar
            src={`${backUrl}/profile/${me.profileImg}`}
            size="large"
            style={{ width: `${widthHeight}`, height: `${widthHeight}`, margin: '7px' }}
          />
          <Input
            value={commentText}
            placeholder="댓글을 입력하세요"
            onChange={onChangeCommentText}
            style={{ width: '80%', backgroundColor: '#F2F3F5', borderColor: 'transparent', borderRadius: '10px', margin: '5px' }}
          />
        </div>
      </Form>
    </>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
  isRecomment: PropTypes.bool.isRequired,
};

export default CommentForm;
