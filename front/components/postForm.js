import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE, ADD_POST_REQUEST } from '../reducers/post';

const { TextArea } = Input;

const PostForm = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { imagePaths } = useSelector((state) => state.post);

  const onFinish = (values) => {
    console.log(values);

    const formData = new FormData();
    formData.append('title', values.title);
    formData.append('content', values.content);
    imagePaths.forEach((p) => {
      formData.append('image', p);
    });
    console.log(formData.title);
    console.log(formData.content);
    console.log(formData.image);

    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });

    return form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  });

  // map 안에 데이터를 함수에 넣고 싶으면 고차함수 사용
  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    });
  });

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
          <Form.Item style={{ flex: '1' }} name="image" valuePropName="fileList">
            <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
            <Button onClick={onClickImageUpload}>이미지 업로드</Button>
            <div>
              {imagePaths.map((v, i) => (
                <div key={v} style={{ display: 'inline-block', width: '280px', borderRadius: '5px', border: '1px solid #c0c0c0', padding: '10px' }}>
                  <img src={`http://localhost:3065/${v}`} style={{ width: '50px' }} alt={v} />
                  <DeleteOutlined onClick={onRemoveImage(i)} style={{ marginLeft: '130px' }} />
                </div>
              ))}
            </div>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default PostForm;
