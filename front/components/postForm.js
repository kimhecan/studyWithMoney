import React from 'react';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const PostForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      <Form name="basic" form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item name="title" rules={[{ required: true, message: '제목을 입력해 주세요!' }]}>
          <Input placeholder="글 제목" />
        </Form.Item>
        <Form.Item name="content" rules={[{ required: true, message: '내용을 입력해주세요!' }]}>
          <TextArea rows={4} placeholder="여기를 눌러서 글을 작성할 수 있습니다" />
        </Form.Item>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Form.Item style={{ flex: '1' }}>
            <Button type="primary" htmlType="submit">
              게시하기
            </Button>
          </Form.Item>
          <Form.Item style={{ flex: '1' }} name="upload" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload name="logo" listType="picture">
              <Button> <UploadOutlined /> 이미지 업로드 </Button>
            </Upload>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default PostForm;
