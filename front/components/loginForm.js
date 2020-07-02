import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Button } from 'antd';
import { loginRequestAction } from '../reducers/user';

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.id, data.password);
    dispatch(loginRequestAction({
      id: data.id,
      password: data.password,
    }));
  };

  return (
    <>
      <div style={{ padding: '70px 70px', border: '2px solid #ccc', borderRadius: '5px' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="id" style={{ color: 'white', position: 'absolute', left: '2%', top: '68%' }}>ID</label>
          <input name="id" placeholder="Enter ID" ref={register({ required: true })} style={{ width: '170px' }} />
          {errors.id && <span>id is required</span>}
          <br />
          <br />
          <label htmlFor="password" style={{ color: 'white', position: 'absolute', left: '2%', top: '78%' }}>Password</label>
          <input
            name="password"
            type="password"
            ref={register({ required: true })}
            placeholder="Enter Password"
            style={{ width: '170px' }}
          />
          {errors.password && <span>password is required</span>}
          <br />
          <Button type="primary" htmlType="submit" ghost style={{ color: 'white', borderColor: 'white', marginTop: '10px', marginRight: '10px' }}>로그인</Button>
          <Button type="primary" htmlType="button" ghost style={{ color: 'white', borderColor: 'white', marginTop: '10px' }}><Link href="/join"><a>회원가입</a></Link></Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
