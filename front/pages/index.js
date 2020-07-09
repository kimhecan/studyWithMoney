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
          <div style={{ backgroundColor: '#272727', height: '850px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: '50%', marginTop: '-270px', marginLeft: '-250px' }}>
              <img
                src="https://user-images.githubusercontent.com/39295881/86248913-7f8de080-bbe9-11ea-801a-73f4f426ed0d.png"
                alt="img"
                style={{ width: '500px' }}
              />
              <br /><br /><br />
              <LoginForm />
            </div>
          </div>
        )
        : <Applayout />}
    </>
  );
};

export default Index;
