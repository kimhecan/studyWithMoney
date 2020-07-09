import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, PageHeader } from 'antd';
import PostForm from './postForm';
import PostCard from './postCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Board = ({ title }) => {
  const { postInfos, hasMorePosts } = useSelector((state) => state.post);

  const [boardTitle, setBoardTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');

  useEffect(() => {
    if (title === 'freeBoard') {
      setBoardTitle('자유게시판');
      setSubTitle('하냥이들의 자유로운 공간입니다');
    } else if (title === 'infoBoard') {
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
      type: LOAD_POSTS_REQUEST,
      // data: title,
    });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts) {
          const lastId = postInfos[postInfos.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            data: lastId,
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
      <Row>
        <Col span={20}>
          <div style={{ margin: '10px 100px' }}>
            <PageHeader className="site-page-header" title={boardTitle} subTitle={subTitle} />
            <PostForm />
            {postInfos.map((post) => <PostCard key={post.id} post={post} />)}
          </div>
        </Col>
        <Col span={4} style={{ backgroundColor: '#50bcdf' }}>
          광고였으면 좋겠다
        </Col>
      </Row>
    </>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Board;
