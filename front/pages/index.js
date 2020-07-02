import React from 'react';
import { useSelector } from 'react-redux';
import Main from './main';
import LoginForm from '../components/loginForm';

const Index = () => {
  const { id } = useSelector((state) => state.user);

  return (
    <>
      {id == null
        ? (
          <div style={{ backgroundColor: '#272727', height: '800px' }}>
            <div style={{ position: 'absolute', left: '35%', top: '10%' }}>
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
