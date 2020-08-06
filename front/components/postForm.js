import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE, ADD_POST_REQUEST } from '../reducers/post';
import useInput from '../hooks/useInput';
import { backUrl } from '../config/config';

const { TextArea } = Input;

const PostForm = ({ category }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { imagePaths } = useSelector((state) => state.post);
  const [content, onChangeContent, setContent] = useInput();

  const onFinish = () => {
    const formData = new FormData();
    formData.append('content', content);
    formData.append('category', category);
    imagePaths.forEach((p) => {
      formData.append('image', p);
    });
    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
    setContent('');
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
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} encType="multipart/form-data">
        <TextArea name="content" value={content} onChange={onChangeContent} rows={4} placeholder="여기를 눌러서 글을 작성할 수 있습니다" required />
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
          <div style={{ flex: 1 }}>
            <Button type="primary" htmlType="submit"> 게시하기 </Button>
          </div>
          <div style={{ flex: 3, marginLeft: '10px' }}>
            <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
            <Button style={{ float: 'right' }} onClick={onClickImageUpload}>이미지 업로드</Button>
          </div>
        </div>
        <div style={{ float: 'right' }}>
          {imagePaths.map((v, i) => (
            <div key={v} style={{ width: '250px', borderRadius: '5px', border: '1px solid #c0c0c0', padding: '5px' }}>
              <img src={`${backUrl}/post/${v}`} style={{ width: '30px' }} alt={v} />
              <DeleteOutlined onClick={onRemoveImage(i)} style={{ marginLeft: '130px' }} />
            </div>
          ))}
        </div>
      </Form>
    </>
  );
};

PostForm.propTypes = {
  category: PropTypes.string.isRequired,
};

export default PostForm;
