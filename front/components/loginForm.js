import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { Button, Form, Input, Checkbox } from 'antd';
import { loginRequestAction } from '../reducers/user';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(loginRequestAction({
      userId: values.id,
      password: values.password,
    }));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <div style={{ backgroundColor: 'white', width: '500px', height: '230px', paddingTop: '50px', paddingRight: '70px', borderRadius: '10px' }}>
        <Form {...layout} name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item label="아이디" name="id" rules={[{ required: true, message: '아이디를 입력해 주세요!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: '비밀번호를 입력해 주세요!!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} name="remember" valuePropName="checked" style={{ marginTop: '-15px' }}>
            <Checkbox>로그인 상태 유지하기</Checkbox>
          </Form.Item>
          <Form.Item {...tailLayout} style={{ marginTop: '-15px' }}>
            <Button type="primary" htmlType="submit" ghost style={{ marginRight: '10px' }}>로그인</Button>
            <Button type="primary" htmlType="button"><Link href="/join"><a>회원가입</a></Link></Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
