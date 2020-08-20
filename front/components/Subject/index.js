import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { StarOutlined, StarFilled } from '@ant-design/icons';
import { StyledCard } from './style';
import { ADD_MY_SUBJECTS_REQUEST, DELETE_MY_SUBJECTS_REQUEST } from '../../reducers/subject';

const Subject = ({ subject, isStar }) => {
  const dispatch = useDispatch();

  const handleStar = useCallback(() => {
    if (!isStar) {
      if (confirm("즐겨찾기에 추가하시겠습니까?") === false) return;
      dispatch({
        type: ADD_MY_SUBJECTS_REQUEST,
        data: { subject },
      });
      alert('즐겨찾기에 추가되었습니다');
    } else {
      if (confirm("즐겨찾기를 삭제하시겠습니까?") === false) return;
      dispatch({
        type: DELETE_MY_SUBJECTS_REQUEST,
        data: { suupNo: subject.suupNo },
      });
      alert('즐겨찾기에서 삭제되었습니다.');
    }
  }, [isStar]);

  return (
    <>
      <StyledCard
        cover={(
          <div>
            <span style={{ marginRight: '15px' }}>{subject.banSosokNm}</span>
            <span style={{ marginRight: '15px' }}>{subject.isuGbNm}</span>
            <span style={{ marginRight: '15px' }}>{subject.grade}학년</span>
            <span>{subject.hakjeom}학점</span>
            {!isStar
              ? <StarOutlined onClick={handleStar} style={{ float: 'right', color: '#EDD200', cursor: 'cell' }} />
              : <StarFilled onClick={handleStar} style={{ float: 'right', color: '#EDD200', cursor: 'cell' }} />}
            <br />
            <strong>{subject.gwamokNm}</strong>
            <br /><br />
            <span style={{ marginRight: '15px' }}>교수: {subject.gyogangsaNms}</span>
            <span>수강정원: {subject.jehanInwon}</span>
            <p>시간: {subject.suupTimes}</p>
          </div>
        )}
      />
    </>
  );
};

Subject.propTypes = {
  subject: PropTypes.object.isRequired,
  isStar: PropTypes.bool.isRequired,
};

export default Subject;
