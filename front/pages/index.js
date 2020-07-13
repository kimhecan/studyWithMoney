import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Applayout from '../components/Applayout';
import LoginForm from '../components/loginForm';
import { LOAD_USER_REQUEST } from '../reducers/user';

const Index = () => {
  const { info } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // SSR처리해야함
  useEffect(() => {
    dispatch({
      type: LOAD_USER_REQUEST,
    });
  }, []);

  return (
    <>
      {info?.id == null
        ? (
          <div style={{ backgroundColor: '#F2F3F5' }}>
            <div style={{ position: 'absolute', left: '50%', top: '50%', marginTop: '-270px', marginLeft: '-250px' }}>
              <img src="http://localhost:3065/profile/logo.png" alt="log" style={{ width: '500px' }} />
              <br /><br /><br />
              <LoginForm />
            </div>
          </div>
        )
        : (
          <div style={{ backgroundColor: '#F2F3F5' }}>
            <Applayout />
          </div>
        )}
    </>
  );
};

export default Index;
