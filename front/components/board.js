import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { PageHeader } from 'antd';
import PostForm from './PostForm';
import PostCard from './PostCard';
import { LOAD_POSTS_REQUEST, POST_RESET } from '../reducers/post';

const Board = ({ category }) => {
  const { postInfos, hasMorePosts } = useSelector((state) => state.post);

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
  }, [boardTitle]);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts) {
          const lastId = postInfos[postInfos.length - 1]?.id;
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
  }, [postInfos, hasMorePosts]);
  return (
    <>
      <div>
        <div style={{ margin: '10px 10%' }}>
          <PageHeader className="site-page-header" title={boardTitle} subTitle={subTitle} />
          <PostForm category={category} />
          {postInfos && postInfos.map((post) => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
    </>
  );
};

Board.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Board;
