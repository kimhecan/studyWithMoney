import React, { useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input, Button, Card, Avatar } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { UPLOAD_UPDATE_IMAGES_REQUEST, REMOVE_UPDATE_IMAGE, UPDATE_POST_REQUEST, UPDATE_DEfAULT_IMAGES } from '../../reducers/post';
import useInput from '../../hooks/useInput';
import { Overlay, Global } from './styles';
import { backUrl } from '../../config/config';

const { TextArea } = Input;

const PostUpdate = ({ post, onClose }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { updateImagePaths } = useSelector((state) => state.post);
  const [content, onChangeContent] = useInput(post.content);

  useEffect(() => {
    const src = [];
    post.Images.forEach((v) => {
      src.unshift(v.src);
    });
    dispatch({
      type: UPDATE_DEfAULT_IMAGES,
      data: src,
    });
  }, []);

  const onFinish = async () => {
    const formData = new FormData();
    formData.append('postId', post.id);
    formData.append('content', content);
    const images = [];
    updateImagePaths.forEach((p) => {
      images.unshift(p);
    });
    await dispatch({
      type: UPDATE_POST_REQUEST,
      data: {
        postId: post.id,
        content,
        images,
      },
    });
    onClose();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const imageInputUpdate = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInputUpdate.current.click();
  }, [imageInputUpdate.current]);

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_UPDATE_IMAGES_REQUEST,
      data: imageFormData,
    });
  });

  // map 안에 데이터를 함수에 넣고 싶으면 고차함수 사용
  const onRemoveImage = useCallback((index) => () => {
    dispatch({
      type: REMOVE_UPDATE_IMAGE,
      data: index,
    });
  });
  return (
    <>
      <Overlay>
        <Global />
        <div style={{ position: 'absolute', left: '50%', top: '50%', marginTop: '-200px', marginLeft: '-300px' }}>
          <Card
            hoverable
            title={(
              <div>
                <h3 style={{ display: 'inline-block' }}>게시물 수정</h3>
                <Button onClick={onClose} shape="circle" style={{ float: 'right' }}>X</Button>
                <br />
                <Avatar
                  src={`${backUrl}/profile/${post.User.profileImg}`}
                  size="large"
                  style={{ width: '50px', height: '50px' }}
                />
                <strong style={{ fontSize: '16px', marginLeft: '7px' }}>{post.User.nickname}</strong>
              </div>

            )}
            style={{ width: '540px', height: '500px', borderRadius: '10px', padding: '10px' }}
            cover={
              (
                <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed} encType="multipart/form-data" style={{}}>
                  <TextArea name="content" value={content} onChange={onChangeContent} rows={4} placeholder="여기를 눌러서 글을 작성할 수 있습니다" required />
                  <div style={{ display: 'flex', flexDirection: 'row', marginTop: '10px' }}>
                    <div style={{ flex: 1 }}>
                      <Button type="primary" htmlType="submit"> 게시하기 </Button>
                    </div>
                    <div style={{ flex: 3, marginLeft: '10px' }}>
                      <input type="file" multiple hidden ref={imageInputUpdate} onChange={onChangeImages} />
                      <Button style={{ float: 'right' }} onClick={onClickImageUpload}>이미지 업로드</Button>
                    </div>
                  </div>
                  <div style={{ float: 'right' }}>
                    {updateImagePaths.map((v, i) => (
                      <div key={v} style={{ width: '250px', borderRadius: '5px', border: '1px solid #c0c0c0', padding: '5px' }}>
                        <img src={`${backUrl}/post/${v}`} style={{ width: '30px' }} alt={v} />
                        <DeleteOutlined onClick={onRemoveImage(i)} style={{ marginLeft: '130px' }} />
                      </div>
                    ))}
                  </div>
                </Form>
              )
            }
          />
        </div>
      </Overlay>
    </>
  );
};

PostUpdate.propTypes = {
  post: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PostUpdate;
