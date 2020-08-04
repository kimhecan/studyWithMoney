import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { Button, Form, Input, Card } from 'antd';
import { LOG_IN_REQUEST, RESET_LOG_IN_MESSAGE } from '../reducers/user';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const LoginForm = () => {
  const { logInMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (logInMessage !== null) {
      alert(logInMessage);
      dispatch({
        type: RESET_LOG_IN_MESSAGE,
      });
    }
  }, [logInMessage]);

  const onSubmit = (values) => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId: values.id,
        password: values.password,
      },
    });
  };

  const onSubmitFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Card
        style={{ backgroundColor: 'white', width: '500px', height: '230px', paddingTop: '50px', paddingRight: '70px', borderRadius: '10px' }}
        hoverable
        cover={
          (
            <Form {...layout} name="basic" onFinish={onSubmit} onFinishFailed={onSubmitFailed}>
              <Form.Item label="아이디" name="id" rules={[{ required: true, message: '아이디를 입력해 주세요!' }]}>
                <Input />
              </Form.Item>
              <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: '비밀번호를 입력해 주세요!!' }]}>
                <Input.Password />
              </Form.Item>
              <Form.Item {...tailLayout} style={{ marginTop: '-3px' }}>
                <Button type="primary" htmlType="submit" ghost style={{ marginRight: '10px' }}>로그인</Button>
                <Button type="primary" htmlType="button"><Link href="/join"><a>회원가입</a></Link></Button>
              </Form.Item>
            </Form>
          )
        }
      />
    </>
  );
};

export default LoginForm;
