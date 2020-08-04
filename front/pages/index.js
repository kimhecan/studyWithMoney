import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Applayout from '../components/Applayout';
import LoginForm from '../components/LoginForm';
import { LOAD_USER_REQUEST } from '../reducers/user';
import wrapper from '../store/configure';

// 프론트랑 브라우저 둘다 실행
const Index = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <>
      {me?.id == null
        ? (
          <div style={{ position: 'absolute', left: '50%', top: '50%', marginTop: '-270px', marginLeft: '-250px' }}>
            <img src="http://localhost:3065/profile/logo.png" alt="log" style={{ width: '500px' }} />
            <br /><br /><br />
            <LoginForm />
          </div>
        )
        : <Applayout />}
    </>
  );
};

// 브라우저에서 실행되는게 아니라 프론트서버에서 실행됨.
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  // 일단 프론트서버에 있는 쿠키를 지웠다가
  axios.defaults.headers.Cookie = '';
  // 서버일때 브라우저에서 오는 쿠키 있을 때만 쿠키넣어서 백엔드에 요청
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_USER_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Index;
