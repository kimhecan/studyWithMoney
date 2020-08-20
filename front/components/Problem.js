import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select, Input, Button, Spin } from 'antd';
import useInput from '../hooks/useInput';
import collageToDepartment from '../util/subject';
import { LOAD_SUBJECTS_REQUEST, LOAD_MY_SUBJECTS_REQUEST } from '../reducers/subject';
import Subject from './Subject';

const { Option } = Select;

const Problem = () => {
  const [collage, setCollage] = useState('');
  const [department, setDepartment] = useState('');
  const [departments, setDepartments] = useState([]);
  const [grade, setGrade] = useState('');
  const [subject, subjectHandler] = useInput('');
  const { subjects, mysubjects, subjectsLoading } = useSelector((state) => state.subject);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_MY_SUBJECTS_REQUEST,
    });
  }, []);

  const handleCollageChange = useCallback((value) => {
    setCollage(value);
    setDepartments(collageToDepartment(value));
  }, [collage]);

  const handleDepartmentChange = useCallback((value) => {
    setDepartment(value);
  }, [department]);

  const handleGradeChange = useCallback((value) => {
    setGrade(value);
  }, [grade]);

  const handleBtnClick = useCallback(() => {
    console.log(collage, department, grade, subject);
    dispatch({
      type: LOAD_SUBJECTS_REQUEST,
      data: { collage, department, grade, subject },
    });
  }, [collage, department, grade, subject]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '10px' }}>
        <Select style={{ flex: 3, borderRadius: '4px' }} onChange={handleCollageChange} placeholder="대학">
          <Option value="Y0000361">공학대학</Option>
          <Option value="Y0001165">소프트웨어융합대학</Option>
          <Option value="Y0001173">과학기술융합대학</Option>
          <Option value="Y0000502">경상대학</Option>
          <Option value="Y0000446">국제문화대학</Option>
          <Option value="Y0000651">디자인대학</Option>
          <Option value="Y0000480">언론정보대학</Option>
          <Option value="Y0000594">약학대학</Option>
          <Option value="Y0000353">예체능대학</Option>
        </Select>
        <Select style={{ flex: 3, borderRadius: '4px', marginLeft: '7px' }} onChange={handleDepartmentChange} placeholder="학과">
          {departments.map((v) => (
            <Option value={v.code}>{v.name}</Option>
          ))}
        </Select>
        <Select style={{ flex: 1, margin: 'auto 7px' }} onChange={handleGradeChange} placeholder="학년">
          <Option value="">전체</Option>
          <Option value="1">1학년</Option>
          <Option value="2">2학년</Option>
          <Option value="3">3학년</Option>
          <Option value="4">4학년</Option>
        </Select>
        <Input placeholder="과목을 입력해주세요" style={{ flex: '3' }} onChange={subjectHandler} />
        <div style={{ flex: 1, textAlign: 'center', marginLeft: '7px' }}>
          <Button type="primary" onClick={handleBtnClick} style={{ width: '150px' }}>검색</Button>
        </div>
      </div>
      {subjectsLoading && <Spin size="large" style={{ marginLeft: '50%', marginTop: '100px' }} />}
      {mysubjects?.map((v, i) => (
        <Subject subject={v} key={i + 1000} isStar />
      ))}
      {subjects?.map((v, i) => (
        <Subject subject={v} key={i} isStar={false} />
      ))}
    </>
  );
};

export default Problem;
