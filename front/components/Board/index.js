import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { PageHeader } from 'antd';
import PostForm from '../PostForm';
import PostCard from '../PostCard';
import { LOAD_POSTS_REQUEST, POST_RESET } from '../../reducers/post';
import PageHeaderWrapper from './style';

const Board = ({ category }) => {
  const { boardPosts, hasMorePosts } = useSelector((state) => state.post);

  const [boardTitle, setBoardTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  useEffect(() => {
    if (category === 'freeBoard') {
      setBoardTitle('자유게시판');
      setSubTitle('하냥이들의 자유로운 공간입니다');
    } else if (category === 'infoBoard') {
      setBoardTitle('정보게시판');
      setSubTitle('하냥이들의 정보공유 공간입니다');
    } else {
      setBoardTitle('동아리·학회 게시판');
      setSubTitle('하냥이들의 동아리·학회 공간입니다');
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: POST_RESET,
    });
    dispatch({
      type: LOAD_POSTS_REQUEST,
      data: {
        category,
      },
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts) {
          const lastId = boardPosts[boardPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            data: {
              lastId,
              category,
            },
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [boardPosts, hasMorePosts]);
  return (
    <>
      <PageHeaderWrapper>
        <PageHeader className="site-page-header" title={boardTitle} subTitle={subTitle} />
        <PostForm category={category} />
        {boardPosts && boardPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </PageHeaderWrapper>
    </>
  );
};

Board.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Board;
