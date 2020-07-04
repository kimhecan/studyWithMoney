import React, { useState, useEffect } from 'react';
import { Form, Input, Button, TreeSelect, Select, Tooltip, Alert } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { joinRequestAction, RESET_SIGN_UP_MESSAGE } from '../reducers/user';

const { Option } = Select;
const { TreeNode } = TreeSelect;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

// Component
const Join = () => {
  const [mailTail, setMailTail] = useState('@google.com');
  const { signUpMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    console.log('Success:', values);
    dispatch(joinRequestAction({
      userId: values.id,
      password: values.password,
      nickname: values.nickname,
      email: values.email + mailTail,
      grade: parseInt(values.grade, 10),
      department: values.department,
    }));
  };

  useEffect(() => {
    console.log(signUpMessage, 'signupmessage');
    if (signUpMessage === '가입이 완료되었습니다!') {
      alert(signUpMessage);
      dispatch({
        type: RESET_SIGN_UP_MESSAGE,
      });
      Router.replace('/');
    } else if (signUpMessage !== null) {
      alert(signUpMessage);
    }
  }, [signUpMessage]);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onChangeEmail = (value) => {
    setMailTail(value);
  };

  const selectAfter = (
    <Select defaultValue="@google.com" className="select-after" onChange={onChangeEmail}>
      <Option value="@google.com">@google.com</Option>
      <Option value="@naver.com">@naver.com</Option>
      <Option value="@hanyang.ac.kr">@hanyang.ac.kr</Option>
    </Select>
  );

  return (
    <div style={{ backgroundColor: '#272727', height: '900px', position: 'relative', lineHeight: '1em' }}>
      <div>
        <br /><br /><br /><br />
        <h1 style={{ color: 'white', textAlign: 'center' }}>새 계정 만들기</h1><br />
        <h2 style={{ color: 'white', textAlign: 'center' }}>빠르고 쉽습니다</h2>
      </div>
      <div style={{ backgroundColor: 'white', width: '450px', height: '500px', position: 'absolute', top: '50%', left: '50%', marginTop: '-250px', marginLeft: '-225px', borderRadius: '10px' }}>
        <Form {...layout} name="join" initialValues={{ remember: true }} onFinish={onSubmit} onFinishFailed={onFinishFailed} style={{ marginTop: '60px', marginRight: '70px' }}>
          <Form.Item label="아이디" name="id" rules={[{ required: true, message: '아이디를 입력해 주세요!' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: '비밀번호를 입력해 주세요!' }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="nickname"
            label={(
              <span>
                닉네임&nbsp;
                <Tooltip title="What do you want others to call you?">
                  <QuestionCircleOutlined />
                </Tooltip>
              </span>
            )}
            rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="이메일" name="email" rules={[{ required: true, message: '이메일을 입력 해주세요!' }]}>
            <Input addonAfter={selectAfter} />
          </Form.Item>
          <Form.Item label="학년" name="grade" rules={[{ required: true, message: '학년을 입력해 주세요!' }]}>
            <Select>
              <Select.Option value="1">1</Select.Option>
              <Select.Option value="2">2</Select.Option>
              <Select.Option value="3">3</Select.Option>
              <Select.Option value="4">4</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="소속 학과" name="department" rules={[{ required: true, message: '소속 학과를 선택해 주세요!' }]}>
            <TreeSelect
              showSearch
              style={{ width: '100%' }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              allowClear
              treeDefaultExpandAll
            >
              <TreeNode value="software" title="소프트웨어대학">
                <TreeNode value="소프트웨어학부" title={<b style={{ color: '#08c' }}>소프트웨어학부</b>} />
                <TreeNode value="ICT융합학부" title={<b style={{ color: '#08c' }}>ICT융합학부</b>} />
              </TreeNode>
              <TreeNode value="engineering" title="공과대학">
                <TreeNode value="건축학부" title={<b style={{ color: '#08c' }}>건축학부</b>} />
                <TreeNode value="건설환경공학과" title={<b style={{ color: '#08c' }}>건설환경공학과</b>} />
                <TreeNode value="교통·물류공학과" title={<b style={{ color: '#08c' }}>교통·물류공학과</b>} />
                <TreeNode value="전자공학부" title={<b style={{ color: '#08c' }}>전자공학부</b>} />
                <TreeNode value="재료화학공학과" title={<b style={{ color: '#08c' }}>재료화학공학과</b>} />
                <TreeNode value="기계공학과" title={<b style={{ color: '#08c' }}>기계공학과</b>} />
                <TreeNode value="산업경영공학과" title={<b style={{ color: '#08c' }}>산업경영공학과</b>} />
                <TreeNode value="생명나노공학과" title={<b style={{ color: '#08c' }}>생명나노공학과</b>} />
                <TreeNode value="로봇공학과" title={<b style={{ color: '#08c' }}>로봇공학과</b>} />
                <TreeNode value="융합공학과" title={<b style={{ color: '#08c' }}>융합공학과</b>} />
                <TreeNode value="국방정보공학과" title={<b style={{ color: '#08c' }}>국방정보공학과</b>} />
                <TreeNode value="스마트융합공학부" title={<b style={{ color: '#08c' }}>스마트융합공학부</b>} />
              </TreeNode>
              <TreeNode value="science" title="과학기술융합대학">
                <TreeNode value="응용수학과" title={<b style={{ color: '#08c' }}>응용수학과</b>} />
                <TreeNode value="응용물리학과" title={<b style={{ color: '#08c' }}>응용물리학과</b>} />
                <TreeNode value="분자생명과학과" title={<b style={{ color: '#08c' }}>분자생명과학과</b>} />
                <TreeNode value="화학분자공학과" title={<b style={{ color: '#08c' }}>화학분자공학과</b>} />
                <TreeNode value="해양융합공학과" title={<b style={{ color: '#08c' }}>해양융합공학과</b>} />
                <TreeNode value="나노광전자학과" title={<b style={{ color: '#08c' }}>나노광전자학과</b>} />
              </TreeNode>
              <TreeNode value="economic" title="경상대학">
                <TreeNode value="경제학부" title={<b style={{ color: '#08c' }}>경제학부</b>} />
                <TreeNode value="경영학부" title={<b style={{ color: '#08c' }}>경영학부</b>} />
                <TreeNode value="보험계리학과 " title={<b style={{ color: '#08c' }}>보험계리학과 </b>} />
                <TreeNode value="회계세무학과" title={<b style={{ color: '#08c' }}>회계세무학과</b>} />
              </TreeNode>
              <TreeNode value="media" title="언론정보대학">
                <TreeNode value="광고홍보학과" title={<b style={{ color: '#08c' }}>광고홍보학과</b>} />
                <TreeNode value="정보사회미디어학과" title={<b style={{ color: '#08c' }}>정보사회미디어학과</b>} />
              </TreeNode>
              <TreeNode value="design" title="디자인대학">
                <TreeNode value="산업디자인학과" title={<b style={{ color: '#08c' }}>산업디자인학과</b>} />
                <TreeNode value="영상디자인학과" title={<b style={{ color: '#08c' }}>영상디자인학과</b>} />
                <TreeNode value="커뮤니케이션디자인학과" title={<b style={{ color: '#08c' }}>커뮤니케이션디자인학과</b>} />
                <TreeNode value="서피스·인테리어디자인학과" title={<b style={{ color: '#08c' }}>서피스·인테리어디자인학과</b>} />
                <TreeNode value="주얼리·패션디자인학과" title={<b style={{ color: '#08c' }}>주얼리·패션디자인학과</b>} />
              </TreeNode>
              <TreeNode value="culture" title="국제문화대학">
                <TreeNode value="한국언어문학과" title={<b style={{ color: '#08c' }}>한국언어문학과</b>} />
                <TreeNode value="문화인류학과" title={<b style={{ color: '#08c' }}>문화인류학과</b>} />
                <TreeNode value="문화콘텐츠학과" title={<b style={{ color: '#08c' }}>문화콘텐츠학과</b>} />
                <TreeNode value="중국학과" title={<b style={{ color: '#08c' }}>중국학과</b>} />
                <TreeNode value="일본학과" title={<b style={{ color: '#08c' }}>일본학과</b>} />
                <TreeNode value="영미언어·문화학과" title={<b style={{ color: '#08c' }}>영미언어·문화학과</b>} />
                <TreeNode value="프랑스학과" title={<b style={{ color: '#08c' }}>프랑스학과</b>} />
              </TreeNode>
              <TreeNode value="sport" title="예체능대학">
                <TreeNode value="스포츠과학부 " title={<b style={{ color: '#08c' }}>스포츠과학부</b>} />
                <TreeNode value="무용예술학과  " title={<b style={{ color: '#08c' }}>무용예술학과</b>} />
                <TreeNode value="실용음악학과  " title={<b style={{ color: '#08c' }}>실용음악학과</b>} />
              </TreeNode>
              <TreeNode value="pharmacy" title="약학대학">
                <TreeNode value="약학과" title={<b style={{ color: '#08c' }}>약학과</b>} />
              </TreeNode>
            </TreeSelect>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" style={{ width: '250px' }}>
              가입하기
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Join;
