import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Avatar } from 'antd';
import useInput from '../hooks/useInput';
import { ADD_COMMENT_REQUEST } from '../reducers/post';
import { backUrl } from '../config/config';

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  const onSubmitComment = useCallback(() => {
    setCommentText('');
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, postId: post.id, userId: me.id },
    });
  }, [commentText, me.id]);
  return (
    <>
      <Form onFinish={onSubmitComment} style={{ backgroundColor: 'white' }}>
        <Avatar
          src={`${backUrl}/profile/${me.profileImg}`}
          size="large"
          style={{ width: '30px', height: '30px', margin: '7px' }}
        />
        <Input
          value={commentText}
          placeholder="댓글을 입력하세요"
          onChange={onChangeCommentText}
          style={{ width: '80%', backgroundColor: '#F2F3F5', borderColor: 'transparent', borderRadius: '10px', margin: '5px' }}
        />
      </Form>
    </>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
