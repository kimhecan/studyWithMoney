import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Radio, Card, Button, Form, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Overlay } from './style';
import { REPORT_POST_REQUEST, RESET_REPORT_MESSAGE } from '../../reducers/post';
import useInput from '../../hooks/useInput';

const { TextArea } = Input;

const Report = ({ post, onReport }) => {
  const [content, contentHandler] = useInput();
  const dispatch = useDispatch();

  const { reportMessage } = useSelector((state) => state.post);

  const onFinish = (values) => {
    console.log(values, 'content');
    if (confirm('게시물을 신고하시겠습니까?') === false) return;
    dispatch({
      type: REPORT_POST_REQUEST,
      data: { post, values },
    });
  };

  useEffect(() => {
    if (reportMessage) {
      alert(reportMessage);
      dispatch({
        type: RESET_REPORT_MESSAGE,
      });
      onReport();
    }
  }, [reportMessage]);

  return (
    <>
      <Overlay>
        <div style={{ position: 'absolute', left: '50%', top: '50%', marginTop: '-100px', marginLeft: '-200px' }}>
          <Card
            title={(
              <>
                <span>게시글 신고하기</span>
                <CloseOutlined onClick={onReport} style={{ float: 'right' }} />
              </>
            )}
            style={{ width: '500px', border: '1px solid lightgray', padding: '5px' }}
            cover={(
              <>
                <Form name="basic" onFinish={onFinish}>
                  <Form.Item name="radio" defaultValue={1}>
                    <Radio.Group>
                      <Radio value={1}>음란한 부분이 있는 게시물</Radio>
                      <Radio value={2}>광고 및 홍보성 게시물</Radio><br /><br />
                      <Radio value={3}>욕설 및 비방 내용의 게시물</Radio>
                      <Radio value={4}>특정 정치적 내용의 게시물</Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item name="content">
                    <TextArea value={content} onChange={contentHandler} placeholder="신고 사유를 적어주세요" />
                  </Form.Item>
                  <Form.Item>
                    <span><Button type="primary" htmlType="submit" style={{ float: 'right' }}>제출하기</Button></span>
                  </Form.Item>
                </Form>
              </>
            )}
          />

        </div>
      </Overlay>
    </>
  );
};

Report.propTypes = {
  post: PropTypes.object.isRequired,
  onReport: PropTypes.func.isRequired,
};

export default Report;
