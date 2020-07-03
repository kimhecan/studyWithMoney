import React from 'react';
import { useSelector } from 'react-redux';
import Main from './main';
import LoginForm from '../components/loginForm';

const Index = () => {
  const { info } = useSelector((state) => state.user);

  return (
    <>
      {info.id == null
        ? (
          <div style={{ backgroundColor: '#272727', height: '800px', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: '50%', marginTop: '-270px', marginLeft: '-250px' }}>
              <img
                src="https://user-images.githubusercontent.com/39295881/86248913-7f8de080-bbe9-11ea-801a-73f4f426ed0d.png"
                alt="img"
                style={{ width: '500px' }}
              />
              <LoginForm />
            </div>
          </div>
        )
        : <Main />}
    </>
  );
};

export default Index;
