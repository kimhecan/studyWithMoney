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
      {visibleReComment && comment.ReComments && comment.ReComments.map((v) => <Remark post={post} comment={v} isRecomment={true} />)}
      {visibleReComment && <CommentForm post={post} comment={comment} isRecomment={true} />}
    </>
  );
};

PostComment.propTypes = {
  comment: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
};

export default PostComment;
