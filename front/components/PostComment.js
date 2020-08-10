import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import Remark from './Remark';

const PostComment = ({ post, comment }) => {
  const [visibleReComment, setVisibleReComment] = useState(false);

  const ReCommentVisible = () => {
    setVisibleReComment((prev) => !prev);
  };

  return (
    <>
      <Remark post={post} comment={comment} isRecomment={false} ReCommentVisible={ReCommentVisible} />
      {visibleReComment && comment.ReComments && comment.ReComments.map((v) => <Remark key={v.id} post={post} comment={v} isRecomment={true} ReCommentVisible={ReCommentVisible} />)}
      {visibleReComment && <CommentForm post={post} parentComment={comment} isRecomment={true} />}
    </>
  );
};

PostComment.propTypes = {
  comment: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

export default PostComment;
