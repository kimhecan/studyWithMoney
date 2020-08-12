import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel, List } from 'antd';
import { POST_RESET, LOAD_POSTS_REQUEST } from '../reducers/post';
import date from '../util/date';

const Main = () => {
  const { boardPosts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: POST_RESET,
    });
    dispatch({
      type: LOAD_POSTS_REQUEST,
      data: {
        category: 'all',
      },
    });
  }, []);

  return (
    <>
      <div style={{ margin: '20px 20px', marginBottom: '50px' }}>
        <Carousel autoplay style={{ textAlign: 'center', height: '170px', lineHeight: '160px', background: '#364d79', overflow: 'hidden' }}>
          <div>
            <h3 style={{ color: '#fff' }}>11</h3>
          </div>
          <div>
            <h3 style={{ color: '#fff' }}>22</h3>
          </div>
          <div>
            <h3 style={{ color: '#fff' }}>33</h3>
          </div>
          <div>
            <h3 style={{ color: '#fff' }}>43</h3>
          </div>
        </Carousel>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ margin: '20px 20px', flex: 1 }}>
          <List
            size="small"
            style={{ backgroundColor: 'white' }}
            header={<div style={{ height: '30px', color: '#364d79', fontWeight: 'bold' }}>자유게시판</div>}
            bordered
            dataSource={boardPosts.filter((v) => v.category === 'freeBoard').map((v) => v)}
            renderItem={(item) => (
              <>
                <List.Item>
                  <span style={{ color: 'black' }}>{item.content}</span>
                  <span style={{ fontSize: '10px' }}>{date(item.createdAt)}</span>
                </List.Item>
              </>
            )}
          />
        </div>
        <div style={{ margin: '20px 20px', flex: 1 }}>
          <List
            size="small"
            style={{ backgroundColor: 'white' }}
            header={<div style={{ height: '30px', color: '#364d79', fontWeight: 'bold' }}>정보게시판</div>}
            bordered
            dataSource={boardPosts.filter((v) => v.category === 'infoBoard').map((v) => v)}
            renderItem={(item) => (
              <List.Item>
                <span style={{ color: 'black' }}>{item.content}</span>
                <span style={{ fontSize: '10px' }}>{date(item.createdAt)}</span>
              </List.Item>
            )}
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ margin: '20px 20px', flex: 1 }}>
          <List
            size="small"
            style={{ backgroundColor: 'white' }}
            header={<div style={{ height: '30px', color: '#364d79', fontWeight: 'bold' }}>동아리'학회</div>}
            bordered
            dataSource={boardPosts.filter((v) => v.category === 'clubBoard').map((v) => v)}
            renderItem={(item) => (
              <List.Item>
                <span style={{ color: 'black' }}>{item.content}</span>
                <span style={{ fontSize: '10px' }}>{date(item.createdAt)}</span>
              </List.Item>
            )}
          />
        </div>
        <div style={{ margin: '20px 20px', flex: 1 }}>
          <List
            size="small"
            style={{ backgroundColor: 'white' }}
            header={<div style={{ height: '30px', color: '#364d79', fontWeight: 'bold' }}>질문</div>}
            bordered
            dataSource={boardPosts.filter((v) => v.category === 'freeBoard').map((v) => v)}
            renderItem={(item) => (
              <List.Item>
                <span style={{ color: 'black' }}>{item.content}</span>
                <span style={{ fontSize: '10px' }}>{date(item.createdAt)}</span>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
