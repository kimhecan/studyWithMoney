import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from 'antd';

const Draw = ({ isShow, onClose, subject }) => {
  return (
    <>
      <Drawer
        width={document.documentElement.clientWidth * 0.8}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={isShow}
      >
        {subject.gwamokNm}
        <br /><br />
        있었으면 하는 것들: 기출(족보)😎😎(구합니다, 공유합니다), 문제질문🔥🔥(사진, 글, 제목), => 답변은 어떤식으로 ui/ux를...
      </Drawer>
    </>
  );
};

Draw.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  subject: PropTypes.object.isRequired,
};

export default Draw;
